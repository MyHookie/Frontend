import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ConfirmHeader from '../../../components/common/ConfirmHeader';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.4rem;
`;
const STagContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
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
  gap: 0.5rem;
  height: 2.5rem;
  width: 100%;
  overflow-x: scroll;
`;

const STagItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  background-color: lightblue;
  padding: 0.5rem 0.7rem;
  border-radius: 1.5rem;
`;

const SImageContainer = styled.div`
  height: 10.4rem;
  margin: 1rem 0rem;
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
  const imageInput = useRef();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTags(e.target.value);
  };

  const handleTagPush = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter' && tagList.length < 3) {
      setTagList([...tagList, tag]);
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
            placeholder="#장소 #위치 #카테고리 (최대 3개)"
          />
          <STagList>
            {tagList.map((tags) => (
              <STagItem key={Math.random()}>{tags}</STagItem>
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
