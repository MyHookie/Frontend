import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const SLinkText = styled.p`
  color: ${({ theme }) => theme.color.LIGHT_BLUE};
`;

function NavigationLink({ path, icon, linkName, onClick }) {
  // 'path => /home'

  return (
    <SLink to={path} onClick={onClick}>
      <img src={icon} alt={path} />
      <SLinkText path={path}>{linkName}</SLinkText>
    </SLink>
  );
}

export default NavigationLink;
