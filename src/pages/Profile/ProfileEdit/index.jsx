import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from './index.styles';

import authAxios from '../../../api/authAxios';
import ConfirmHeader from '../../../components/common/ConfirmHeader';
import ProfileInfoForm from '../../../components/Profile/ProfileInfoForm';
import {
  isSubscribedAccountState,
  profileAccountName,
  profileImage,
  profileInputValid,
  profileIntro,
  profileUserName,
} from '../../../atoms/profileInfo';

function ProfileEdit() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const userName = useRecoilValue(profileUserName);
  const accountName = useRecoilValue(profileAccountName);
  const image = useRecoilValue(profileImage);
  const intro = useRecoilValue(profileIntro);

  const { accountNameValid, userNameValid } = useRecoilValue(profileInputValid);

  const setIsSubscribedAccount = useSetRecoilState(isSubscribedAccountState);

  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  const goBackPage = () => {
    navigate(-1);
  };

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
      console.log(userName, accountName, image, intro);
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
          const response = await authAxios.put(
            '',
            {
              user: {
                username: userName,
                accountname: accountName,
                intro,
                image,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem('token')
                )}`,
                'Content-type': 'application/json',
              },
            }
          );

          console.log(response);
          if (response.statusText === 'OK') {
            const userData = response.data.user;
            const { accountname } = userData;

            localStorage.setItem('accountName', JSON.stringify(accountname));

            navigate(`/profile/${accountname}`);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    [userName, accountName, intro]
  );

  return (
    <>
      <ConfirmHeader
        leftClick={goBackPage}
        rightClick={handleStartClick}
        rightButtonText="수정"
        buttonNotAllow={buttonNotAllow}
      />
      <S.Container>
        <ProfileInfoForm edit savedData={state} />
      </S.Container>
    </>
  );
}

export default ProfileEdit;
