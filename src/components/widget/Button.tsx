/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ButtonHTMLAttributes } from 'react';

import { setClass } from 'utils';
import { Color } from 'utils/type';

interface ButtonProps extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children?: React.ReactNode;
  color?: Color;
}

const Button = (props: ButtonProps) => {
  const { type, children, color, className, ...attr } = props;
  return (
    <button type={`${type || 'button'}`} className={setClass('btn', color, className)} {...attr}>
      {children}
    </button>
  );
};

export default Button;
