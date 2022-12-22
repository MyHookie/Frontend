import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import searchIcon from '../../assets/icon/icon-search.png';
import logoGrey from '../../assets/logo_grey.png';
import Button from '../../components/common/Button';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import PostList from '../../components/Post/PostList';
import UserSearch from '../../components/UserSearch';
import hookieImage from '../../assets/Hookie.png';

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100 + 4.4) vh;

  padding: 0.9rem;
  margin-bottom: 6rem;
`;

const SEmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;

  button {
    width: 12rem;
  }
`;

const SEmptyImage = styled.img`
  width: 20rem;
  margin-bottom: 2.6rem;
`;

const SEmptyContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};
  margin-bottom: 2rem;
`;

function Home() {
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    const { data } = await axios.get(
      'https://mandarin.api.weniv.co.kr/post/Test/userpost',
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      }
    );
    return data;
  };

  const { data, isLoading, isError } = useQuery('postList', fetchPost);

  const goToSearch = () => {
    navigate('/search');
  };

  return (
    <>
      {!isLoading && (
        <>
          <BaseHeader
            image={hookieImage}
            rightIcon={searchIcon}
            rightClick={goToSearch}
            rightAlt="검색창 이동"
          />

          <SContainer>
            {data.post.length > 0 ? (
              <PostList postData={data.post} />
            ) : (
              <SEmptyContainer>
                <SEmptyImage src={logoGrey} alt="로고 이미지" />
                <SEmptyContent>유저를 검색해 팔로우 해보세요!</SEmptyContent>
                <Button
                  text="검색하기"
                  buttonStyle={LARGE_BUTTON}
                  onClick={goToSearch}
                />
              </SEmptyContainer>
            )}
          </SContainer>
        </>
      )}

      <Navigation />
    </>
  );
}

export default Home;
