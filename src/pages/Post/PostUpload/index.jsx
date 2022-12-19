import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';
import * as S from './index.styles';
import ConfirmHeader from '../../../components/common/ConfirmHeader';
import TagItem from './TagItem';
import deleteButton from '../../../assets/icon/x_shadow.png';

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
    console.log(contents, imageUrls);
    // try {
    //   const response = fetchPost(imageUrls, contents);
    //   return response.then(navigate(`/profile`));
    // } catch (error) {
    //   return error;
    // }
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

  const getTagColors = () => {
    const colors = [
      '#9EB8EB',
      '#E8BAB3',
      '#DFD3C3',
      '#CCDEC1',
      '#D1AEC0',
      '#9ADECE',
      '#CEDEB4',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
  };

  const handleTagPush = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      setTagList([...tagList, { text: `#${tag}`, color: getTagColors() }]);
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
      <S.Container>
        <S.TagContainer>
          <S.TagInput
            type="text"
            value={tag}
            onChange={handleTagChange}
            onKeyDown={handleTagPush}
            placeholder="#장소 #위치 #카테고리"
          />
          <S.TagList>
            {tagList.map((tags, index) => (
              <TagItem
                key={nanoid()}
                tagText={tags.text}
                tagColor={tags.color}
                handleTagDelete={() => handleTagDelete(index)}
              />
            ))}
          </S.TagList>
        </S.TagContainer>
        <form>
          <S.ImageContainer>
            <S.ImageInput onClick={handleImageAdd}>+</S.ImageInput>
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
                <S.PreviewImageBox key={nanoid()}>
                  <img src={src} alt="미리보기 이미지" />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                  >
                    <img src={deleteButton} alt="미리보기 이미지 삭제" />
                  </button>
                </S.PreviewImageBox>
              ))}
          </S.ImageContainer>
          <S.Content
            type="text"
            placeholder="후기를 입력해주세요!"
            value={content}
            onChange={handleContentChange}
          />
        </form>
      </S.Container>
    </>
  );
}

export default PostUpload;
