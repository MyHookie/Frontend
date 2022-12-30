import React from 'react';
import styled from 'styled-components';

const STagItem = styled.li`
  font-size: 1.2rem;
  background-color: ${({ tagColor }) => tagColor};
  color: black;
  padding: 0.3rem 0.8rem;
  border-radius: 1.5rem;
`;

function TagItem({ tagText, tagColor, handleTagDelete }) {
  return (
    <STagItem tagColor={tagColor} onClick={handleTagDelete}>
      {tagText}
    </STagItem>
  );
}

export default TagItem;
