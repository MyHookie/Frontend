import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';

import SearchHeader from '../common/SearchHeader';
import SearchedUser from './SearchedUser';

const SContainer = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.color.WHITE};
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
  const [searchData, setSearchData] = useState('');
  const { data, isLoading, isError } = useQuery(
    ['searchUser', searchData],
    () => userFetch(searchData),
    {
      enabled: !!searchData,
      select: (result) => result.slice(0, 10),
    }
  );

  const handleSearchData = (e) => {
    setSearchData(e.target.value);
  };

  console.log(data, searchData);
  return (
    <>
      <SearchHeader
        leftClick={handleSearchActive}
        value={searchData}
        onChange={handleSearchData}
      />
      {isLoading && <div>로딩 중 입니다.</div>}
      {isError && <div>에러 발생!!</div>}
      {data && (
        <SContainer>
          {data.map((user) => (
            <SearchedUser
              key={user.id}
              image={user.image}
              username={user.username}
              accountname={user.accountname}
              intro={user.intro}
            />
          ))}
        </SContainer>
      )}
    </>
  );
}

export default UserSearch;
