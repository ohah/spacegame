/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Children, Fragment, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Combobox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';

type XPosition = 'top' | 'left' | 'bottom' | 'right';
type YPostion = '-start' | '' | '-end';
type Position = `${XPosition}${YPostion}`;

interface MutilSelectValue {
  title: string;
  value: string;
}
interface MutilSelectListBoxProps {
  children: React.ReactNode;
  // [key in keyof K]: string;
  defaultValue: MutilSelectValue[];
  onChange?: (value: MutilSelectValue[]) => void;
  position?: Position;
}

interface ButtonProps {
  children: React.ReactNode;
}

interface OptionItemProps {
  children: (props: Partial<OptionRenderPropArg>) => JSX.Element;
  value: MutilSelectValue;
}

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
  value: MutilSelectValue;
}
interface MultiContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rect?: DOMRect;
  setRect: React.Dispatch<React.SetStateAction<DOMRect | undefined>>;
  container: HTMLDivElement;
  position: Position;
  selectedValues: MutilSelectValue[];
  setSelectedValues: React.Dispatch<React.SetStateAction<MutilSelectValue[]>>;
  isSelected: (value?: MutilSelectValue) => boolean;
  setValues: (value: MutilSelectValue) => void;
}

const MultiContext = createContext({} as MultiContextProps);

const useMultiContext = () => {
  return useContext(MultiContext);
};

const MutilSelectProvider = ({ defaultValue, children, onChange, position }: MutilSelectListBoxProps) => {
  const [selectedValues, setSelectedValues] = useState<MutilSelectValue[]>(defaultValue || []);
  const [open, setOpen] = useState<boolean>(false);
  const [rect, setRect] = useState<DOMRect>();
  const container: HTMLDivElement = document.querySelector('#multiselect-popup') || document.createElement('div');
  container.id = 'multiselect-popup';
  container.classList.add('fixed');
  const isSelected = (value?: MutilSelectValue): boolean => {
    // return !!selectedValues.find(item => Object.is(value, item));
    return !!selectedValues.find(item => JSON.stringify(item) === JSON.stringify(value));
  };

  const setValues = (value: MutilSelectValue) => {
    if (isSelected(value) === true) {
      setSelectedValues(currValues => {
        return [...currValues.filter(val => JSON.stringify(val) !== JSON.stringify(value))];
      });
    } else if (value) {
      setSelectedValues(currValues => [...currValues, ...[value]]);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValues);
    }
  }, [selectedValues]);

  return (
    <MultiContext.Provider
      value={{
        container,
        open,
        rect,
        setRect,
        position: position || 'bottom',
        setOpen,
        selectedValues,
        setSelectedValues,
        isSelected,
        setValues,
      }}
    >
      <MultiSelectBox>{children}</MultiSelectBox>
    </MultiContext.Provider>
  );
};

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <>{children}</>;
};

Button.displayName = 'Button';

const Option = ({ children, value }: OptionItemProps) => {
  const { open, isSelected, setValues, container, position, rect } = useMultiContext();
  const active = isSelected(value);
  const selected = isSelected(value);
  const onClick = (e: any) => {
    e.preventDefault();
    setValues(value);
  };

  return ReactDOM.createPortal(
    <Transition
      as="div"
      show={open}
      leave="transition ease-in duration-[1500ms]"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <li className="list-none">
        {Children.map(children({ active, selected, value }), child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              onClick: onClick,
            });
          }
          return child;
        })}
      </li>
    </Transition>,
    container,
  );
};

Option.displayName = 'Option';

const MultiSelectBox = ({ children }: { children: React.ReactNode }) => {
  const { setValues, open, setOpen, setRect, container, rect, position } = useMultiContext();
  const childArr = Children.toArray(children);
  const mulitRef = useRef<HTMLUListElement>(null);

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
        return { top: rect?.top || 0, left: rect?.bottom || 0, transform: '' };
    }
  };

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [open]);

  const mutilButton = childArr.find(child => (child as any).type.displayName === 'Button');
  const options = childArr.filter(child => (child as any).type.displayName === 'Option');
  const menuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    setRect(mulitRef.current?.getBoundingClientRect() || undefined);
    const { top, left, transform } = setStylePosition();
    container.style.top = `${top}px`;
    container.style.left = `${left}px`;
    container.style.transform = transform || '';
    console.log('open', open);
  };
  return (
    <ul onChange={value => setValues(value as never as MutilSelectValue)} ref={mulitRef}>
      <div className="relative mt-1">
        <button className="relative w-full" type="button" onClick={menuOpen}>
          {mutilButton || <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
        </button>
        {options}
      </div>
    </ul>
  );
};

type MutilSelectType = typeof MutilSelectProvider & {
  Button: typeof Button;
  Option: typeof Option;
};

Object.assign(MutilSelectProvider, { Option, Button });

export default MutilSelectProvider as MutilSelectType;
