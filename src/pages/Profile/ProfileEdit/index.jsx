import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';

import * as S from './index.styles';
import ConfirmHeader from '../../../components/common/ConfirmHeader';
import ProfileInfoForm from '../../../components/Profile/ProfileInfoForm';
import {
  profileAccountName,
  profileImage,
  profileInputValid,
  profileIntro,
  profileUserName,
} from '../../../atoms/profileInfo';

import { editProfile } from '../../../api/authAxios';

function ProfileEdit() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const userName = useRecoilValue(profileUserName);
  const accountName = useRecoilValue(profileAccountName);
  const image = useRecoilValue(profileImage);
  const intro = useRecoilValue(profileIntro);

  const { accountNameValid, userNameValid } = useRecoilValue(profileInputValid);

  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  const goBackPage = () => {
    navigate(-1);
  };

  const editMyProfile = useMutation(
    () => editProfile(userName, accountName, intro, image),
    {
      onSuccess: (data) => {
        const userData = data.user;

        localStorage.setItem(
          'accountName',
          JSON.stringify(userData.accountname)
        );
        localStorage.setItem('imageSrc', JSON.stringify(userData.image));
        navigate(`/profile/${userData.accountname}`);
      },
    }
  );

  const onClickEdit = () => {
    editMyProfile.mutate(userName, accountName, intro, image);
  };

  useEffect(() => {
    if (accountNameValid && userNameValid) {
      return setButtonNotAllow(false);
    }
    return setButtonNotAllow(true);
  }, [accountName, userName]);

  return (
    <>
      <ConfirmHeader
        leftClick={goBackPage}
        rightClick={onClickEdit}
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
