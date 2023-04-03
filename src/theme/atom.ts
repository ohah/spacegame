/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export interface ITheme {
  theme: 'light' | 'dark' | 'cyan';
}
export const ThemeState = atom<ITheme>({
  key: 'Theme',
  default: {
    theme: 'cyan',
  },
  effects: [localStorageEffect<ITheme>('Theme')],
});
