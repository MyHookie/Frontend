import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';
import styled from 'styled-components';
import ConfirmHeader from '../../../components/common/ConfirmHeader';
import TagItem from './TagItem';
import deleteButton from '../../../assets/icon/x_shadow.png';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.4rem;
`;

const STagContainer = styled.div`
  padding: 1rem 0rem;

  form {
    margin-bottom: 1rem;
  }
`;

const STagInput = styled.input`
  width: 100%;
  padding: 1.2rem 0.8rem;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};

  border-radius: 1.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

const STagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  min-height: 3.5rem;
  width: 100%;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

const SImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  height: 10.4rem;
  padding-bottom: 1rem;
  box-sizing: content-box;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};

  gap: 1rem;
`;

const SPreviewImageBox = styled.div`
  position: relative;

  width: 10.4rem;
  min-width: 10.4rem;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};

  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.8rem;
  }
`;

const SImageInput = styled.div`
  height: 100%;
  width: 10.4rem;

  flex: 0 0 auto;
  font-size: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;
  color: ${({ theme }) => theme.color.GRAY};
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

const SContent = styled.textarea`
  width: 100%;
  height: 30vh;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  line-height: 1.8rem;
  resize: none;

  margin-top: 2rem;
  padding: 0rem 1rem;
`;

function PostUpload() {
  const [tag, setTags] = useState('');
  const [tagList, setTagList] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const imageInput = useRef();

  const fetchImage = async (images, index) => {
    const formData = new FormData();
    formData.append('image', images[index]);
    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        formData
      );
      return res.data.filename;
    } catch (error) {
      return error;
    }
  };

  const fetchPost = async (imageUrls, contents) => {
    await axios({
      url: `https://mandarin.api.weniv.co.kr/post`,
      method: 'post',
      headers: {
        Authorization: `Bearer (userToken 넣는 부분)`,
        'Content-type': 'application/json',
      },
      data: {
        post: {
          content: contents,
          image: imageUrls.join(', '),
        },
      },
    });
  };

  const createPost = async (e) => {
    e.preventDefault();
    const promiseImageArray = [];

    for (let index = 0; index < imageFile.length; index += 1) {
      promiseImageArray.push(fetchImage(imageFile, index));
    }

    const imageUrls = await Promise.all(promiseImageArray);

    const contents = JSON.stringify({
      tags: tagList,
      content,
    });

    try {
      const response = fetchPost(imageUrls, contents);
      return response.then(navigate(`/profile`));
    } catch (error) {
      return error;
    }
  };

  const handleImagePreview = (e) => {
    const fileArray = e.target.files;
    const files = [];

    if (fileArray.length > 3) {
      alert('이미지는 한번에 3개까지만 추가할 수 있습니다.');
      return;
    }

    setImageFile([...imageFile, ...fileArray]);

    for (let i = 0; i < fileArray.length; i += 1) {
      const reader = new FileReader();

      reader.onload = () => {
        files.push(reader.result);
        setBase64Image([...base64Image, ...files]);
      };

      reader.readAsDataURL(fileArray[i]);
    }
  };

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const handleTagPush = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      setTagList([...tagList, `#${tag}`]);
      setTags('');
    }
  };

  const handleImageAdd = () => {
    imageInput.current.click();
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const goBackPage = () => {
    navigate(-1);
  };

  const handleTagDelete = (targetIndex) => {
    const newTagList = tagList.filter((_, index) => index !== targetIndex);
    setTagList(newTagList);
  };

  const handleImageDelete = (targetIndex) => {
    const newImageList = base64Image.filter(
      (_, index) => index !== targetIndex
    );
    setBase64Image(newImageList);
  };

  return (
    <>
      <ConfirmHeader leftClick={goBackPage} rightClick={createPost} />
      <SContainer>
        <STagContainer>
          <STagInput
            type="text"
            value={tag}
            onChange={handleTagChange}
            onKeyDown={handleTagPush}
            placeholder="#장소 #위치 #카테고리"
          />
          <STagList>
            {tagList.map((tagText, index) => (
              <TagItem
                key={nanoid()}
                tag={tagText}
                handleTagDelete={() => handleTagDelete(index)}
              />
            ))}
          </STagList>
        </STagContainer>
        <form>
          <SImageContainer>
            <SImageInput onClick={handleImageAdd}>+</SImageInput>
            <input
              ref={imageInput}
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic"
              multiple
              style={{ display: 'none' }}
              onChange={handleImagePreview}
            />
            {base64Image &&
              base64Image.map((src, index) => (
                <SPreviewImageBox key={nanoid()}>
                  <img src={src} alt="미리보기 이미지" />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                  >
                    <img src={deleteButton} alt="미리보기 이미지 삭제" />
                  </button>
                </SPreviewImageBox>
              ))}
          </SImageContainer>
          <SContent
            type="text"
            placeholder="후기를 입력해주세요!"
            value={content}
            onChange={handleContentChange}
          />
        </form>
      </SContainer>
    </>
  );
}

export default PostUpload;
