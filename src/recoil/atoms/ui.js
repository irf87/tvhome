import { atom } from 'recoil';

export const dialogCategoriesUi = atom({
  key: 'ATOMS/DIALOG_CATEGORIES',
  default: {
    open: false,
    data: {}
  },
});