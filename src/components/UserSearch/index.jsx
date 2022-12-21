import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchHeader from '../common/SearchHeader';
import SearchedUser from './SearchedUser';

const SContainer = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const SMoreView = styled.p`
  text-align: center;
  margin-bottom: 8rem;

  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.ACTIVE_BLUE};
`;

const userFetch = async (keyword) => {
  const { data } = await axios.get(
    `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};

function UserSearch({ handleSearchActive }) {
  const [keyword, setKeyword] = useState('');
  const [viewCount, setViewCount] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(
    ['searchUser', keyword],
    () => userFetch(keyword),
    {
      enabled: !!keyword,
      select: (result) => result.slice(0, viewCount * 10),
    }
  );

  const handleSearchData = (e) => {
    setKeyword(e.target.value);
  };

  const handleMoreView = () => {
    setViewCount(viewCount + 1);
  };

  const goToProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <>
      <SearchHeader
        leftClick={handleSearchActive}
        value={keyword}
        onChange={handleSearchData}
      />
      {isLoading && <div>로딩 중 입니다.</div>}
      {isError && <div>에러 발생!!</div>}
      {data && (
        <SContainer>
          {data.map((user) => (
            <SearchedUser
              key={user._id}
              image={user.image}
              username={user.username}
              intro={user.intro}
              keyword={keyword}
              goToProfile={() => goToProfile(user.accountname)}
            />
          ))}
          <SMoreView onClick={handleMoreView}>더 보기</SMoreView>
        </SContainer>
      )}
    </>
  );
}

export default UserSearch;
