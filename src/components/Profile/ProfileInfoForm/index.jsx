import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from './index.styles';
import ProfileImageInput from '../../ProfileImageInput';
import AuthInputForm from '../../AuthInputForm';
import {
  isSubscribedAccountState,
  profileAccountName,
  profileInputValid,
  profileIntro,
  profileUserName,
} from '../../../atoms/profileInfo';

function ProfileInfoForm({ edit, savedData }) {
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [accountName, setAccountName] = useRecoilState(profileAccountName);
  const [userName, setUserName] = useRecoilState(profileUserName);
  const [intro, setIntro] = useRecoilState(profileIntro);

  const isSubscribedAccount = useRecoilValue(isSubscribedAccountState);
  const {
    accountNameValid,
    userNameValid,
    accountNameWarningMessage,
    userNameWarningMessage,
  } = useRecoilValue(profileInputValid);

  useEffect(() => {
    if (edit) {
      setAccountName(savedData.accountName);
      setUserName(savedData.userName);
      setIntro(savedData.intro);
    } else {
      setAccountName('');
      setUserName('');
      setIntro('');
    }
  }, []);

  const handleAccountName = (e) => {
    setAccountName(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleIntro = (e) => {
    setIntro(e.target.value);
  };

  // 아이디 인풋창 자동 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 소개 textarea 높이
  const handleResizeHeight = () => {
    textareaRef.current.style.height = `38px`;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <>
      <ProfileImageInput edit savedImage={savedData.profileImage} />
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
          profileValid={
            isSubscribedAccount.accountNameValid && accountNameValid
          }
          warningMsg={
            isSubscribedAccount.accountNameValid
              ? accountNameWarningMessage
              : isSubscribedAccount.validWarningMessage
          }
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
          warningMsg={userNameWarningMessage}
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
