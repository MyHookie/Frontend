import React from 'react';
import styled from 'styled-components';

const STagItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  background-color: ${({ tagColor }) => tagColor};
  padding: 0.3rem 0.8rem;
  border-radius: 1.5rem;
`;

const getTagColors = () => {
  const colors = [
    '#9EB8EB',
    '#E8BAB3',
    '#DFD3C3',
    '#CCDEC1',
    '#D1AEC0',
    '#9ADECE',
    '#CEDEB4',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return randomColor;
};

function TagItem({ tag, handleTagDelete }) {
  // const [tagColor, setTagColor] = useState('');

  return (
    <STagItem tagColor={getTagColors} onClick={handleTagDelete}>
      {tag}
    </STagItem>
  );
}

export default TagItem;
