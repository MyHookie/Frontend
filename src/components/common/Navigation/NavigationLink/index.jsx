import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pathState from '../../../../atoms/path';

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 3rem;
  gap: 0.2rem;
  padding-top: 0.3rem;

  img {
    width: 2.5rem;
  }
`;

const SLinkText = styled.p`
  color: ${({ isSame }) => (isSame ? '#5095FA' : '#767676')};
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
