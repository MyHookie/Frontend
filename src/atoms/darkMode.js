import { atom } from 'recoil';

const isDarkState = atom({
  key: 'isDarkState',
  default: false,
});

export default isDarkState;
