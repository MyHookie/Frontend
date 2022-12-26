import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import * as S from './index.styles';
import ProfileImageInput from '../../ProfileImageInput';
import AuthInputForm from '../../AuthInputForm';
import {
  profileAccountName,
  profileAccountNameValid,
  profileAccountNameWarningMessage,
  profileIntro,
  profileUserName,
} from '../../../atoms/profileInfo';

function ProfileInfoForm() {
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [accountName, setAccountName] = useRecoilState(profileAccountName);
  const [userName, setUserName] = useRecoilState(profileUserName);
  const [intro, setIntro] = useRecoilState(profileIntro);

  const [accountNameValid, setAccountNameValid] = useRecoilState(
    profileAccountNameValid
  );
  const [userNameValid, setUserNameValid] = useState(false);

  const [accountNameWarningMsg, setAccountNameWarningMsg] = useRecoilState(
    profileAccountNameWarningMessage
  );
  const [userNameWarningMsg, setUserNameWarningMsg] = useState('');

  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  const handleAccountName = (e) => {
    setAccountName(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleIntro = (e) => {
    setIntro(e.target.value);
  };

  // 인풋창 입력할 때마다 유효성 검사
  useEffect(() => {
    const ID_REGEX = /^[a-z0-9A-Z_.]{2,16}$/;

    if (ID_REGEX.test(accountName)) {
      setAccountNameValid(true);
    } else {
      setAccountNameValid(false);
      setAccountNameWarningMsg(
        '* 2~16자 이내의 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.'
      );
    }

    if (userName.length < 2 || userName.length > 10) {
      setUserNameValid(false);
      setUserNameWarningMsg('* 2~10자 이내로 입력해주세요');
    } else {
      setUserNameValid(true);
    }
  }, [accountName, userName]);

  // 아이디와 이름 유효성 통과 시 버튼 활성화
  useEffect(() => {
    if (accountNameValid && userNameValid) {
      return setButtonNotAllow(false);
    }
    return setButtonNotAllow(true);
  }, [accountName, userName]);

  // 아이디 인풋창 자동 포커스
  useEffect(() => {
    console.log(inputRef);
  }, []);

  // 소개 textarea 높이
  const handleResizeHeight = () => {
    textareaRef.current.style.height = `38px`;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <>
      <ProfileImageInput />
      <S.FormContainer>
        <AuthInputForm
          id="id"
          label="사용자 ID"
          inputProps={{
            type: 'text',
            placeholder: '아이디를 입력해주세요',
          }}
          handleProfileState={handleAccountName}
          inputValue={accountName}
          profileValid={accountNameValid}
          warningMsg={accountNameWarningMsg}
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
          warningMsg={userNameWarningMsg}
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
      </S.FormContainer>
    </>
  );
}

export default ProfileInfoForm;
