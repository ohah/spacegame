/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import useLogin from 'store/login/hooks';
import { ITheme, ThemeState } from 'theme/atom';

import {
  ArrowRightOnRectangleIcon as LogoutIcon,
  ArrowLeftOnRectangleIcon as LoginIcon,
} from '@heroicons/react/24/solid';

import { Switch } from 'components/widget';

const Header = () => {
  const [theme, setTheme] = useRecoilState<ITheme>(ThemeState);
  const { user, Login, Logout } = useLogin();
  const ToggleLogin = useCallback(() => {
    if (user.id.trim()) {
      Logout({ id: user.id });
    } else {
      Login({ id: 'shifeed', password: 'asdf' });
    }
  }, [user.id]);
  useEffect(() => {
    Login({ id: 'shifeed', password: 'asdf' });
  }, []);
  useEffect(() => {
    const html = document.querySelector('html');
    html!.className = theme.theme;
  }, [theme]);
  return (
    <nav className="flex flex-gap-3 menu w-full">
      <header className="py-2 flex justify-center h-16 navy items-center gap-x-4 w-full cyan:bg-teal-600 dark:bg-slate-800">
        <div className="sidebar-basis flex p-3" role="navigation">
          SPACEGAME
        </div>
        <div className="flex flex-grow" role="list">
          SPACEGAME
        </div>
        <button
          type="button"
          onClick={() => ToggleLogin()}
          className="flex group items-center w-10 h-10 justify-center"
        >
          {!user.id ? <LoginIcon className="icon" /> : <LogoutIcon className="icon" />}
        </button>
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
    </nav>
  );
};

export default Header;
