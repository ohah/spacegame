/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

import { user } from 'mocks/data';

export const userState = atom<typeof user>({
  key: 'user',
  default: {
    id: '',
  },
});
