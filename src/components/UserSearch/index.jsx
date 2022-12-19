import React from 'react';
import styled from 'styled-components';
import SearchHeader from '../common/SearchHeader';

const SContainer = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

function UserSearch({ handleSearchActive }) {
  return (
    <>
      <SearchHeader leftClick={handleSearchActive} />
      <SContainer>api 통신</SContainer>;
    </>
  );
}

export default UserSearch;
