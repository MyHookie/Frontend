import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './index.style';
import Title from '../../../components/Title';
import ProfileImageInput from '../../../components/ProfileImageInput';
import AuthInputForm from '../../../components/AuthInputForm';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 소개 textarea 높이
  const textareaRef = useRef(null);
  const handleResizeHeight = () => {
    textareaRef.current.style.height = `38px`;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  return (
    <S.Container>
      <Title>프로필 설정</Title>
      <S.SubText>나중에 언제든지 변경할 수 있습니다.</S.SubText>
      <ProfileImageInput />
      <S.FormContainer>
        <AuthInputForm
          id="id"
          label="사용자 ID"
          inputProps={{
            type: 'text',
            placeholder: '아이디를 입력해주세요',
          }}
        />
        <AuthInputForm
          id="name"
          label="사용자 이름"
          inputProps={{
            type: 'text',
            placeholder: '이름을 입력해주세요',
          }}
        />
        <S.IntroFormContainer>
          <S.Label htmlFor="intro">소개</S.Label>
          <S.IntroContent
            id="intro"
            name="intro"
            placeholder="소개글을 입력해주세요"
            rows={1}
            cols={20}
            maxLength={100}
            wrap="hard"
            ref={textareaRef}
            onInput={handleResizeHeight}
          />
        </S.IntroFormContainer>
        <S.JoinButton text="후키 시작하기" buttonStyle={LARGE_BUTTON} />
      </S.FormContainer>
    </S.Container>
  );
}

export default ProfileSetting;
