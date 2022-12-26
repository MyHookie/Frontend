import { atom } from 'recoil';

export const profileUserName = atom({
  key: 'profileUserName',
  default: '',
});

export const profileAccountName = atom({
  key: 'profileAccountName',
  default: '',
});

export const profileImage = atom({
  key: 'profileImage',
  default: '',
});

export const profileIntro = atom({
  key: 'profileIntro',
  default: '',
});

export const profileAccountNameValid = atom({
  key: 'profileAccountNameValid',
  default: false,
});

export const profileAccountNameWarningMessage = atom({
  key: 'profileAccountNameWarningMessage',
  default: '',
});
