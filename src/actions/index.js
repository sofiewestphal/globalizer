import { CATEGORY_SET_CHECKED } from './actionCreators';

export const setCategoryChecked = (label) => ({
  type: CATEGORY_SET_CHECKED,
  payload: label
});