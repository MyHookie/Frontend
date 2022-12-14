import { atom } from 'recoil';

export const signUpEmail = atom({
  key: 'signUpEmail',
  default: '',
});

export const signUpPassword = atom({
  key: 'signUpPassword',
  default: '',
});
