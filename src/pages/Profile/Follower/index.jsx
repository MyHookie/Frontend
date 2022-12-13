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

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  align-items: center;
`;

const STextItem = styled.div`
  margin: 0 1.2rem;
`;

const SImg = styled.img`
  width: 5rem;
`;

const STextUserId = styled.p`
  width: 22.8rem;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const STextIntroduction = styled.p`
  width: 22.8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.GRAY};
  ${slEllipsis}
`;

function Follower() {
  return (
    <div>
      <BaseHeader leftIcon={arrowIcon} title="Follower" />
      <SContainer>
        <STitle>팔로워 페이지</STitle>
        <SContent>
          <SImg src={basicProfilSmallImg} alt="프로필 이미지" />
          <STextItem>
            <STextUserId>
              안녕하세요, 사용자 이름입니다. 이러쿵 저러쿵 어쩌고 저쩌고
            </STextUserId>
            <STextIntroduction>
              안녕하세요, 제 소개를 하자면요. 이러쿵 저러쿵 어쩌고 저쩌고
            </STextIntroduction>
          </STextItem>
          <Button text="팔로우" buttonStyle={FOLLOW_BUTTON} />
        </SContent>

        <SContent>
          <SImg src={basicProfilSmallImg} alt="프로필 이미지" />
          <STextItem>
            <STextUserId>userId</STextUserId>
            <STextIntroduction>Hello, world!</STextIntroduction>
          </STextItem>
          <Button
            text="팔로우"
            buttonStyle={FOLLOW_BUTTON}
            color="green"
            background="pink"
          />
        </SContent>

        <SContent>
          <SImg src={basicProfilSmallImg} alt="프로필 이미지" />
          <STextItem>
            <STextUserId>
              안녕하세요, 사용자 이름입니다. 이러쿵 저러쿵 어쩌고 저쩌고
            </STextUserId>
            <STextIntroduction>
              안녕하세요, 제 소개를 하자면요. 이러쿵 저러쿵 어쩌고 저쩌고
            </STextIntroduction>
          </STextItem>
          <Button cancel text="취소" buttonStyle={FOLLOW_BUTTON} />
        </SContent>

        <SContent>
          <SImg src={basicProfilSmallImg} alt="프로필 이미지" />
          <STextItem>
            <STextUserId>userId</STextUserId>
            <STextIntroduction>Hello, world!</STextIntroduction>
          </STextItem>
          <Button
            cancel
            text="취소"
            buttonStyle={FOLLOW_BUTTON}
            color="green"
            background="pink"
          />
        </SContent>
      </SContainer>
    </div>
  );
}

export default Follower;
