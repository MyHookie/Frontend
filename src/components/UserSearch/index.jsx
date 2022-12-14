import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

function UserSearch() {
  return <SContainer>api 통신</SContainer>;
}

export default UserSearch;
