import styled from 'styled-components';

import Button from '../../common/Button';

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const FollowInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 3rem 5.4rem 1.5rem 5.4rem;
`;

export const FollowInfo = styled.div`
  text-align: center;
`;

export const FollowCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  font-family: LINESeedKR-Bd;

  margin-bottom: 0.3rem;
`;

export const FollowType = styled.p`
  color: ${({ theme }) => theme.color.GRAY};
`;

export const ProfileImage = styled.img`
  min-width: 11rem;
  width: 11rem;
  min-height: 11rem;
  height: 11rem;

  object-fit: cover;

  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  font-family: LINESeedKR-Bd;

  padding-bottom: 0.6rem;
`;

export const AccountName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};

  padding-bottom: 1.5rem;
`;

export const Intro = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};

  padding: 0rem 5rem 2.4rem 5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  padding-bottom: 2rem;
`;

export const IconButton = styled.button`
  min-width: 3.4rem;
  width: 3.4rem;
  min-height: 3.4rem;
  height: 3.4rem;

  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};

  img {
    width: 1.5rem;
  }
`;

export const FollowButton = styled(Button)`
  width: 12rem;
  height: 3.4rem;
`;
