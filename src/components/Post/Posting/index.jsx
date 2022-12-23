import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { nanoid } from 'nanoid';
import * as S from './index.styles';

import TagItem from '../TagItem';
import PreviewImageItem from '../PreviewImageItem';
import {
  tagListState,
  contentState,
  imageFileListState,
} from '../../../atoms/post';

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

function Posting() {
  const [tag, setTags] = useState('');
  const [base64Image, setBase64Image] = useState([]);

  const [tagList, setTagList] = useRecoilState(tagListState);
  const [content, setContent] = useRecoilState(contentState);
  const [imageFileList, setImageFileList] = useRecoilState(imageFileListState);

  const imageInput = useRef();

  const handleImageAdd = () => {
    imageInput.current.click();
  };

  const handleImagePreview = (e) => {
    const fileArray = e.target.files;
    const files = [];

    if (fileArray.length > 3) {
      alert('이미지는 한번에 3개까지만 추가할 수 있습니다.');
      return;
    }

    setImageFileList([...imageFileList, ...fileArray]);

    for (let i = 0; i < fileArray.length; i += 1) {
      const reader = new FileReader();

      reader.onload = () => {
        files.push(reader.result);
        setBase64Image([...base64Image, ...files]);
      };

      reader.readAsDataURL(fileArray[i]);
    }
  };

  const handleImageDelete = (targetIndex) => {
    const newImageList = base64Image.filter(
      (_, index) => index !== targetIndex
    );
    setBase64Image(newImageList);
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

  const handleTagDelete = (targetIndex) => {
    const newTagList = tagList.filter((_, index) => index !== targetIndex);
    setTagList(newTagList);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
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
  );
}

export default Posting;
