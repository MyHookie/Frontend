import React from 'react';
import styled from 'styled-components';
import BaseHeader from '../../../components/common/BaseHeader';
import Button from '../../../components/common/Button';
import { FOLLOW_BUTTON } from '../../../constants/buttonStyle';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import basicProfilSmallImg from '../../../assets/basic-profile_small.png';
import { IR, slEllipsis } from '../../../styles/Util';

const SContainer = styled.section`
  padding: 24px 16px 0;
`;

const STitle = styled.h2`
  ${IR}
`;

function Follower() {
  return (
    <div>
      <BaseHeader leftIcon={arrowIcon} title="Follower" />
      <SContainer>
        <STitle>팔로워 페이지</STitle>
      </SContainer>
    </div>
  );
}

export default Follower;
