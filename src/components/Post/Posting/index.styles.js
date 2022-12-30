import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.4rem;
`;

export const TagContainer = styled.div`
  padding: 1rem 0rem;

  form {
    margin-bottom: 1rem;
  }
`;

export const TagInput = styled.input`
  width: 100%;
  padding: 1.2rem 0.8rem;
  border: none;
  font-size: 1.4rem;
  background-color: inherit;
  color: ${({ theme }) => theme.TEXT};

  border-radius: 1.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.ACTIVE_INPUT};
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  min-height: 3.5rem;
  width: 100%;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  height: 10.4rem;
  padding-bottom: 1rem;
  box-sizing: content-box;

  border-bottom: 1px solid ${({ theme }) => theme.BORDER};

  gap: 1rem;
`;

export const ImageInput = styled.div`
  height: 100%;
  width: 10.4rem;

  flex: 0 0 auto;
  font-size: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
`;

export const Content = styled.textarea`
  width: 100%;
  height: 30vh;
  font-size: 1.4rem;
  line-height: 1.8rem;
  resize: none;

  margin-top: 2rem;
  padding: 0rem 1rem;

  background-color: inherit;
  color: ${({ theme }) => theme.TEXT};
`;
