/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ITheme, ThemeState } from 'theme/atom';

import { Button, Switch } from 'components/widget';

const SideBar = () => {
  return (
    <aside className="basis-72 min-h-full" role="navigation" aria-label="Main">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-slate-800 cyan:bg-teal-600">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cyan:hover:bg-teal-500 cyan:text-gray-200">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 cyan:text-gray-200 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
