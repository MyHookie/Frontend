import { atom, selector } from 'recoil';

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

export const isSubscribedAccountState = atom({
  key: 'isSubscribedAccountState',
  default: {
    accountNameValid: true,
    validWarningMessage: '',
  },
});

export const profileInputValid = selector({
  key: 'profileInputValid',
  get: ({ get }) => {
    const userName = get(profileUserName);
    const accountName = get(profileAccountName);
    let accountNameValid;
    let userNameValid;
    let accountNameWarningMessage;
    let userNameWarningMessage;

    const ID_REGEX = /^[a-z0-9A-Z_.]{2,16}$/;

    if (ID_REGEX.test(accountName)) {
      accountNameValid = true;
    } else {
      accountNameValid = false;
      accountNameWarningMessage =
        '* 2~16자 이내의 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.';
    }

    if (userName.length < 2 || userName.length > 10) {
      userNameValid = false;
      userNameWarningMessage = '* 2~10자 이내로 입력해주세요';
    } else {
      userNameValid = true;
    }

    return {
      accountNameValid,
      userNameValid,
      accountNameWarningMessage,
      userNameWarningMessage,
    };
  },
});
