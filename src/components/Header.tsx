/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ITheme, ThemeState } from 'theme/atom';

import { Button, Switch } from 'components/widget';

const Header = () => {
  const [theme, setTheme] = useRecoilState<ITheme>(ThemeState);
  useEffect(() => {
    const html = document.querySelector('html');
    html!.className = theme.theme;
  }, [theme]);
  return (
    <nav className="flex flex-gap-3 ">
      <header className="py-2 flex justify-center">Header</header>
      <div className="theme-cyan:bg-violet-600 p-4 rounded">daㄴㅇㄹ px</div>
      <Switch
        onChange={() => {
          const newTheme = { ...theme };
          newTheme.theme = newTheme.theme === 'dark' ? 'cyan' : 'dark';
          setTheme(newTheme);
        }}
      />
    </nav>
  );
};

export default Header;
