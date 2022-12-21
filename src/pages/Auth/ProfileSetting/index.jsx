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
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [userID, setUserID] = useState('');
  const [userName, setUserName] = useState('');
  const [intro, setIntro] = useState('');

  const [userIdValid, setUserIdValid] = useState(false);
  const [userNameValid, setUserNameValid] = useState(false);

  const [idWarningMsg, setIdWarningMsg] = useState('');
  const [nameWarningMsg, setNameWarningMsg] = useState('');

  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  // 인풋창 입력할 때마다 유효성 검사
  useEffect(() => {
    const ID_REGEX = /^[a-z0-9A-Z_.]{1,}$/;

    if (ID_REGEX.test(userID)) {
      setUserIdValid(true);
    } else {
      setUserIdValid(false);
      setIdWarningMsg('* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.');
    }

    if (userName.length < 2 || userName.length > 10) {
      setUserNameValid(false);
      setNameWarningMsg('* 2~10자 이내로 입력해주세요');
    } else {
      setUserNameValid(true);
    }
  }, [userID, userName]);

  // 아이디와 이름 유효성 통과 시 버튼 활성화
  useEffect(() => {
    if (userIdValid && userNameValid) {
      return setButtonNotAllow(false);
    }
    return setButtonNotAllow(true);
  }, [userID, userName]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 소개 textarea 높이
  const handleResizeHeight = () => {
    textareaRef.current.style.height = `38px`;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  const handleUserID = (e) => {
    setUserID(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleIntro = (e) => {
    setIntro(e.target.value);
  };

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
          handleProfileState={handleUserID}
          inputValue={userID}
          profileValid={userIdValid}
          warningMsg={idWarningMsg}
          inputRef={inputRef}
        />
        <AuthInputForm
          id="name"
          label="사용자 이름"
          inputProps={{
            type: 'text',
            placeholder: '이름을 입력해주세요',
          }}
          handleProfileState={handleUserName}
          inputValue={userName}
          profileValid={userNameValid}
          warningMsg={nameWarningMsg}
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
            value={intro}
            onChange={handleIntro}
          />
        </S.IntroFormContainer>
        <S.JoinButton
          text="후키 시작하기"
          buttonStyle={LARGE_BUTTON}
          disabled={buttonNotAllow}
        />
      </S.FormContainer>
    </S.Container>
  );
}

export default ProfileSetting;
