/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Children, ForwardedRef, HTMLAttributes, forwardRef } from 'react';

type CustomCard = typeof Card & {
  Title: typeof Title;
  Body: typeof Body;
};

interface CardProps extends Partial<HTMLAttributes<HTMLElement>> {
  children?: React.ReactNode;
}

interface TitleProps extends Partial<HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface BodyProps extends Partial<HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ as, children, ...props }: TitleProps) => {
  const As = as || 'h1';
  return <As {...props}>{children}</As>;
};

Title.displayName = 'Title';

const Body = ({ children, ...props }: BodyProps) => {
  return <div {...props}>{children}</div>;
};

Body.displayName = 'Body';

const Card = forwardRef(({ ...props }: CardProps, ref: ForwardedRef<HTMLElement>) => {
  const { className, children, onMouseDown, onMouseUp, onTouchEnd, ...attr } = props;
  const childArray = Children.toArray(children);
  const bodyChildren = childArray.filter(
    child => typeof child === 'string' || (child as any).type.displayName !== 'Title',
  );
  const index = childArray.findIndex(child => (child as any).type.displayName === 'Title');
  return (
    <section
      className={[
        'rounded border cyan:border-cyan-400 cyan:bg-cyan-700 dark:border-slate-500 dark:bg-slate-800',
        className,
      ].join(' ')}
      ref={ref}
      {...attr}
    >
      {index !== -1 && (
        <header
          className="cursor-move select-none sticky top-0 left-0 border-collapse cyan:border-cyan-400 cyan:bg-cyan-700 dark:border-slate-500 dark:bg-slate-800 border-b text-lg"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchEnd={onTouchEnd}
        >
          {childArray[index]}
        </header>
      )}
      {bodyChildren}
    </section>
  );
});

Object.assign(Card, { Title, Body });
export default Card as CustomCard;
