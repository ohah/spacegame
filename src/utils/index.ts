/* eslint-disable no-bitwise */
/* eslint-disable import/prefer-default-export */

import { Color } from 'utils/type';

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * @param { Color } color color 정보 받기
 * @param { string } className class 받기
 * @param { prefix } className class 접두사
 * @returns { string }
 */
export const setClass = (prefix: string, color?: Color, className?: string): string => {
  if (color?.trim() && !className?.trim()) return [prefix, `${prefix}-${color}`].join(' ').trim();
  if (className?.trim() && !color?.trim()) return className;
  if (className?.trim() && color?.trim()) return [`${prefix}-${color}`, className].join(' ').trim();
  return `${prefix} ${prefix}-primary`;
};

export const printSign = (num?: number) => {
  if (num && num > 0) return '+' + num;
  if (num && num < 0) return '-' + Math.abs(num);
  return num;
};
