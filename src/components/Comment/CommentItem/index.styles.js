import styled from 'styled-components';

export const Contents = styled.div`
  margin: 0 0 1.6rem;
`;

export const CommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex: 4 4 0;
  margin: 0 1.2rem;
  font-size: 1.4rem;
`;

export const CommentTime = styled.span`
  font-size: 1.2rem;
  vertical-align: top;
  color: ${({ theme }) => theme.LIGHT_TEXT};

  &::before {
    content: 'ㆍ';
    padding-left: 0.2rem;
  }
`;

export const VerticalButton = styled.button`
  width: 2rem;
`;

export const Comments = styled.pre`
  margin: 0.4rem 4.8rem 0;
  font-size: 1.4rem;
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
