import React from 'react';
import styled from 'styled-components';

const SBottomSheetContent = styled.button`
  width: 100%;
  padding: 1rem 0px;
  background-color: inherit;
  border: none;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

function BottomSheetContent({ onClick, text }) {
  return <SBottomSheetContent onClick={onClick}>{text}</SBottomSheetContent>;
}

export default BottomSheetContent;
