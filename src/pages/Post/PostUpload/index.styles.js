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
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};

  border-radius: 1.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  min-height: 3.5rem;
  width: 100%;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  height: 10.4rem;
  padding-bottom: 1rem;
  box-sizing: content-box;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};

  gap: 1rem;
`;

export const PreviewImageBox = styled.div`
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

export const ImageInput = styled.div`
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

export const Content = styled.textarea`
  width: 100%;
  height: 30vh;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  line-height: 1.8rem;
  resize: none;

  margin-top: 2rem;
  padding: 0rem 1rem;
`;
