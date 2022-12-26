import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './index.style';
import Title from '../../../components/Title';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import authAxios from '../../../api/authAxios';
import {
  isSubscribedAccountState,
  profileAccountName,
  profileImage,
  profileInputValid,
  profileIntro,
  profileUserName,
} from '../../../atoms/profileInfo';
import ProfileInfoForm from '../../../components/Profile/ProfileInfoForm';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const userName = useRecoilValue(profileUserName);
  const accountName = useRecoilValue(profileAccountName);
  const image = useRecoilValue(profileImage);
  const intro = useRecoilValue(profileIntro);

  const { accountNameValid, userNameValid } = useRecoilValue(profileInputValid);

  const setIsSubscribedAccount = useSetRecoilState(isSubscribedAccountState);

  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  useEffect(() => {
    if (accountNameValid && userNameValid) {
      setIsSubscribedAccount({
        accountNameValid: true,
        validWarningMessage: '',
      });
      return setButtonNotAllow(false);
    }
    return setButtonNotAllow(true);
  }, [accountName, userName]);

  const handleStartClick = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await authAxios.post('/accountnamevalid', {
          user: {
            accountname: accountName,
          },
        });

        if (res.data.message === '이미 가입된 계정ID 입니다.') {
          setIsSubscribedAccount({
            accountNameValid: false,
            validWarningMessage: '* 이미 가입된 사용자 ID 입니다.',
          });
        } else {
          const response = await authAxios.post('/', {
            user: {
              username: userName,
              email: state.email,
              password: state.password,
              accountname: accountName,
              intro,
              image,
            },
          });

          console.log(response.data.user);
          if (response.data.message === '회원가입 성공') {
            const userData = response.data.user;
            const { accountname } = userData;

            localStorage.setItem('accountName', JSON.stringify(accountname));

            navigate('/welcome');
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    [userName, accountName, intro]
  );

  return (
    <S.Container>
      <Title>프로필 설정</Title>
      <S.SubText>나중에 언제든지 변경할 수 있습니다.</S.SubText>
      <ProfileInfoForm />
      <S.JoinButton
        text="후키 시작하기"
        buttonStyle={LARGE_BUTTON}
        onClick={handleStartClick}
        disabled={buttonNotAllow}
      />
    </S.Container>
  );
}

export default ProfileSetting;
