import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchHeader from '../common/SearchHeader';
import SearchedUser from './SearchedUser';
import * as S from './index.styles';

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

function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const [viewCount, setViewCount] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(
    ['searchUser', keyword],
    () => userFetch(keyword),
    {
      enabled: !!keyword,
      select: (result) => result.slice(0, viewCount * 5),
    }
  );

  const handleSearchData = (e) => {
    setKeyword(e.target.value);
    setViewCount(1);
  };

  const handleMoreView = () => {
    setViewCount(viewCount + 1);
  };

  const goToProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <SearchHeader
        leftClick={goBackPage}
        value={keyword}
        onChange={handleSearchData}
      />
      {isLoading && <div>로딩 중 입니다.</div>}
      {isError && <div>에러 발생!!</div>}
      <S.Container>
        {data?.map((user) => (
          <SearchedUser
            key={user._id}
            image={user.image}
            username={user.username}
            intro={user.intro}
            accountname={user.accountname}
            keyword={keyword}
            goToProfile={() => goToProfile(user.accountname)}
          />
        ))}
        {data?.length > 0 && (
          <S.MoreView onClick={handleMoreView}>더 보기</S.MoreView>
        )}
        {keyword && data?.length === 0 && (
          <S.Message>검색된 이용자가 없습니다.</S.Message>
        )}
      </S.Container>
    </>
  );
}

export default UserSearch;
