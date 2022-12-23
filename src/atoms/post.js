import { atom } from 'recoil';

export const tagListState = atom({
  key: 'tagListState',
  default: [],
});

export const contentState = atom({
  key: 'contentState',
  default: '',
});

export const imageFileListState = atom({
  key: 'imageFileListState',
  default: [],
});
