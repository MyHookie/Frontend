import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import SearchHeader from '../common/SearchHeader';
import SearchedUser from './SearchedUser';
import * as S from './index.styles';
import useDebounceValue from '../../hooks/useDebounceValue';

import searchUser from '../../api/search';
import SearchSkeleton from '../Skeleton/Search';

function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const [viewCount, setViewCount] = useState(1);
  const navigate = useNavigate();

  const debouncedSearchKeyword = useDebounceValue(keyword, 750);

  const { data, isLoading, isError } = useQuery(
    ['searchUser', debouncedSearchKeyword],
    () => searchUser(debouncedSearchKeyword),
    {
      enabled: !!debouncedSearchKeyword,
      select: (result) => result.slice(0, viewCount * 5),
    }
  );

  const handleSearchKeyword = (e) => {
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
        onChange={handleSearchKeyword}
      />
      <S.Container>
        {isLoading && (
          <div>
            <SearchSkeleton />
            <SearchSkeleton />
            <SearchSkeleton />
            <SearchSkeleton />
          </div>
        )}
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
        {data?.length > 0 && data?.length >= viewCount * 5 && (
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
