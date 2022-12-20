import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';
import * as S from './index.styles';
import ConfirmHeader from '../../../components/common/ConfirmHeader';

import TagItem from '../../../components/Post/TagItem';
import PreviewImageItem from '../../../components/Post/PreviewImageItem';

const getTagColors = () => {
  const colors = [
    '#DADAFC',
    '#EDE1E3',
    '#E8E7D2',
    '#EFBAD6',
    '#F9D9CA',
    '#E1F1E7',
    '#EEB8B8',
    '#F5E892',
    '#C5DAD1',
    '#C9CBE0',
    '#F7F2D4',
    '#AEDDEF',
    '#F5DDAD',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return randomColor;
};

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
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
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

    if (e.target.value.length === 0) {
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
                <PreviewImageItem
                  key={nanoid()}
                  src={src}
                  handleImageDelete={() => handleImageDelete(index)}
                />
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
