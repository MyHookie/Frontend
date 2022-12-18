import { atom } from 'recoil';

export const signUpEmail = atom({
  key: 'signUpEmail',
  default: '',
});

export const signUpPassword = atom({
  key: 'signUpPassword',
  default: '',
});

export const userEmail = atom({
  key: 'userEmail',
  default: '',
});

export const userPassword = atom({
  key: 'userPassword',
  default: '',
});
