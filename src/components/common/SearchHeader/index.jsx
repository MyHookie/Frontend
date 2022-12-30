import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../../../assets/icon/icon-arrow-left.png';

const SContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;

  width: 100%;
  padding: 0.8rem 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND};

  z-index: 100;
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
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
  border-radius: 1rem;
  margin-left: 1.5rem;
  padding: 0.775rem 1.5rem;
  color: ${({ theme }) => theme.TEXT};

  &:placeholder {
    color: ${({ theme }) => theme.SUB_TEXT};
  }
`;

function SearchHeader({ leftClick, onChange, value }) {
  return (
    <SContainer>
      <SButton onClick={leftClick}>
        <img src={arrowIcon} alt="뒤로가기" />
      </SButton>
      <SearchInput
        type="text"
        placeholder="계정 검색"
        value={value}
        onChange={onChange}
      />
    </SContainer>
  );
}

export default SearchHeader;
