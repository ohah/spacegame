/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children?: React.ReactNode;
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
}

const Button = (props: ButtonProps) => {
  const { type, children, color, className, ...attr } = props;
  // const colorClass = color ? `btn-${color}` : '';
  return (
    <button type={`${type || 'button'}`} className={`${className || 'btn-primary'}`} {...attr}>
      {children}
    </button>
  );
};

export default Button;
