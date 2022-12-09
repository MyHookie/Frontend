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

function NavigationLink({ path, icon, linkName, onClick }) {
  return (
    <SLink to={path} onClick={onClick}>
      <img src={icon} alt={path} />
      <p>{linkName}</p>
    </SLink>
  );
}

export default NavigationLink;
