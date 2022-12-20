import { atom } from 'recoil';

import BasicProfileImage from '../assets/basic-profile.png';

export const signUpEmail = atom({
  key: 'signUpEmail',
  default: '',
});

export const signUpPassword = atom({
  key: 'signUpPassword',
  default: '',
});

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

export const userName = atom({
  key: 'userName',
  default: '',
});

export const accountName = atom({
  key: 'accountName',
  default: '',
});

export const profileImageSrc = atom({
  key: 'profileImageSrc',
  default: BasicProfileImage,
});

export const userIntro = atom({
  key: 'userIntro',
  default: '',
});
