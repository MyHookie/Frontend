import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pathState from '../../../../atoms/path';

const SLink = styled(Link)`
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const SLinkText = styled.p`
  color: ${({ isSame, theme }) =>
    isSame ? theme.color.LIGHT_BLUE : theme.color.GRAY};
`;

function NavigationLink({ path, icon, linkName, onClick }) {
  const currenPath = useRecoilValue(pathState);

  return (
    <SLink to={path} onClick={onClick}>
      <img src={icon} alt={path} />
      <SLinkText isSame={path !== '/post/upload' && currenPath === path}>
        {linkName}
      </SLinkText>
    </SLink>
  );
}

export default NavigationLink;
