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
    <nav className="flex flex-gap-3 menu w-full">
      <header className="py-2 flex justify-center h-16 navy items-center gap-x-4 w-full cyan:bg-teal-600 dark:bg-slate-800">
        <div className="flex flex-none" role="navigation">
          SPACEGAME
        </div>
        <div className="flex flex-grow" role="list">
          SPACEGAME
        </div>
        <div className="flex flex-none">로그인</div>
        <div className="flex flex-none">
          <Switch
            onChange={() => {
              const newTheme = { ...theme };
              newTheme.theme = newTheme.theme === 'dark' ? 'cyan' : 'dark';
              setTheme(newTheme);
            }}
          />
        </div>
      </header>
      {/* <div className="theme-cyan:bg-violet-600 p-4 rounded">daㄴㅇㄹ px</div> */}
    </nav>
  );
};

export default Header;
