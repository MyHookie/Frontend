import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './index.style';
import Title from '../../../components/Title';
import ProfileImageInput from '../../../components/ProfileImageInput';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  return (
    <S.Container>
      <Title>프로필 설정</Title>
      <S.SubText>나중에 언제든지 변경할 수 있습니다.</S.SubText>
      <ProfileImageInput />
    </S.Container>
  );
}

export default ProfileSetting;
