import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../../../assets/icon/icon-arrow-left.png';

const SContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const SButton = styled.button`
  cursor: pointer;
  border: none;
  flex-grow: 0;
  background-color: inherit;
  width: 2.2rem;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  background-color: #f2f2f2;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  margin-left: 1.5rem;
  padding: 0.775rem 1.5rem;

  &:placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

function SearchHeader({ leftClick }) {
  return (
    <SContainer onClick={leftClick}>
      <SButton>
        <img src={arrowIcon} alt="뒤로가기" />
      </SButton>
      <SearchInput type="text" placeholder="계정 검색" />
    </SContainer>
  );
}

export default SearchHeader;
