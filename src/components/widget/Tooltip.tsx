/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Transition } from '@headlessui/react';

type CustomTooltip = typeof Tooltip & {
  Text: typeof Text;
};

type XPosition = 'top' | 'left' | 'bottom' | 'right';
type YPostion = '-start' | '' | '-end';
type Position = `${XPosition}${YPostion}`;

interface TooltipProps extends Partial<HTMLAttributes<HTMLElement>> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  position?: Position;
  arrow?: boolean;
}

interface TooltipTextProps extends Partial<HTMLAttributes<HTMLElement>> {
  children?: React.ReactNode;
}

interface TooltipContextProps {
  as: React.FC<React.HTMLAttributes<HTMLElement>>;
  rect?: DOMRect;
  setRect: React.Dispatch<React.SetStateAction<DOMRect | undefined>>;
  position: Position;
  arrow: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const TooltipContext = createContext({} as TooltipContextProps);

const useTooltip = () => {
  return useContext(TooltipContext);
};

const Provider = ({ as: Wrapper = 'div', children, position, arrow, ...props }: TooltipProps) => {
  const [rect, setRect] = useState<DOMRect>();
  const [show, setShow] = useState<boolean>(false);
  return (
    <TooltipContext.Provider
      value={{
        show,
        setShow,
        as: Wrapper as never as React.FC<React.HTMLAttributes<HTMLElement>>,
        arrow: arrow || false,
        position: position || 'bottom',
        rect: rect,
        setRect,
      }}
    >
      <Tooltip {...props}>{children}</Tooltip>
    </TooltipContext.Provider>
  );
};

const Text = ({ children, ...props }: TooltipTextProps) => {
  const [container] = useState(document.createElement('div'));
  const textRef = useRef<HTMLElement>(null);
  const { show, rect, position, arrow } = useTooltip();

  const setStylePosition = (): React.CSSProperties => {
    if (!rect) {
      return { top: 0, left: 0 };
    }
    const { width, height, top, left } = rect;
    switch (position) {
      case 'bottom':
        return { top: top + height, left: left + width / 2, transform: 'translateX(-50%)' };
      case 'bottom-end':
        return { top: top + height, left: left + width, transform: 'translateX(-100%)' };
      case 'bottom-start':
        return { top: top + height, left: left };
      case 'top':
        return { top: top, left: left + width / 2, transform: 'translate(-50%, -100%)' };
      case 'top-end':
        return { top: top, left: left + width, transform: 'translate(-100%, -100%)' };
      case 'top-start':
        return { top: top, left: left, transform: 'translateY(-100%)' };
      case 'right':
        return { top: top + height / 2, left: left + width, transform: 'translate(0%, -50%)' };
      case 'right-end':
        return { top: top + height, left: left + width, transform: 'translateY(-100%)' };
      case 'right-start':
        return { top: top, left: left + width };
      case 'left':
        return { top: top + height / 2, left: left, transform: 'translate(-100%, -50%)' };
      case 'left-end':
        return { top: top + height, left: left, transform: 'translate(-100%, -100%)' };
      case 'left-start':
        return { top: top, left: left, transform: 'translateX(-100%)' };
      default:
        return { top: rect?.top || 0, left: rect?.bottom || 0 };
    }
  };

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  if (!rect) return null;

  return ReactDOM.createPortal(
    <Transition
      ref={textRef}
      show={show}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
      className={`fixed ${arrow && `tooltip-arrow tooltip-${position}`} ${props.className || 'tooltip'}`}
      role="tooltip"
      style={{ ...setStylePosition() }}
    >
      {children}
    </Transition>,
    container,
  );
};

Text.displayName = 'Text';

const Tooltip = React.memo(({ children, ...props }: TooltipProps) => {
  const { setRect, as: Wrapper, setShow } = useTooltip();
  const onMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    setRect(e.currentTarget.getBoundingClientRect());
    setShow(true);
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setShow(false);
  };
  // const childArr = Children.toArray(children);
  // const text = childArr.find(child => (child as any).type.displayName === 'Text');
  // const remainChildren = childArr.filter(child => (child as any).type.displayName !== 'Text');
  return (
    <Wrapper onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} {...props}>
      {children}
    </Wrapper>
  );
});

Object.assign(Provider, { Text });

export default Provider as CustomTooltip;
