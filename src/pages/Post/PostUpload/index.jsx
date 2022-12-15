import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ConfirmHeader from '../../../components/common/ConfirmHeader';

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

const STagItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  background-color: ${({ tagColor }) => tagColor};
  padding: 0.3rem 0.8rem;
  border-radius: 1.5rem;
`;

const SImageContainer = styled.div`
  height: 10.4rem;
  padding-bottom: 1rem;
  box-sizing: content-box;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

const SImageInput = styled.div`
  height: 100%;
  width: 10.4rem;

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

  padding: 1rem;
`;

function PostUpload() {
  const [tag, setTags] = useState('');
  const [tagList, setTagList] = useState([]);
  const [tagColor, setTagColor] = useState('');
  const imageInput = useRef();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
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
      setTagColor(getTagColors());
      setTagList([...tagList, `#${tag}`]);
      setTags('');
    }
  };

  const handleImageAdd = () => {
    imageInput.current.click();
  };

  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <ConfirmHeader leftClick={goBackPage} />
      <SContainer>
        <STagContainer>
          <STagInput
            type="text"
            value={tag}
            onChange={handleInputChange}
            onKeyDown={handleTagPush}
            maxLength="10"
            placeholder="#장소 #위치 #카테고리"
          />
          <STagList>
            {tagList.map((tags) => (
              <STagItem key={Math.random()} tagColor={tagColor}>
                {tags}
              </STagItem>
            ))}
          </STagList>
        </STagContainer>
        <form>
          <SImageContainer>
            <SImageInput onClick={handleImageAdd}>+</SImageInput>
            <input
              ref={imageInput}
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple
              style={{ display: 'none' }}
            />
          </SImageContainer>
          <SContent type="text" placeholder="후기를 입력해주세요!" />
        </form>
      </SContainer>
    </>
  );
}

export default PostUpload;
