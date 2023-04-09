/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NavigateProps } from 'react-router-dom';

import { Transition } from '@headlessui/react';
import { ClockIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { Button, Disclosure } from 'components/widget';

export interface MenuItem {
  name: string;
  to: NavigateProps['to'];
  children: Omit<MenuItem, 'children'>[];
}

const SideBar = () => {
  const menuItems: MenuItem[] = [
    {
      name: '집무실',
      to: '/',
      children: [
        { name: '행성', to: '/' },
        { name: '군사', to: '/' },
        { name: '첩보', to: '/' },
        { name: '자원', to: '/' },
      ],
    },
    {
      name: '외교',
      to: '/',
      children: [
        { name: '경매', to: '/' },
        { name: '지휘관', to: '/' },
        { name: '군사', to: '/' },
        { name: '첩보', to: '/' },
        { name: '자원', to: '/' },
      ],
    },
    {
      name: '거래소',
      to: '/',
      children: [
        { name: '경매', to: '/' },
        { name: '지휘관', to: '/' },
        { name: '군사', to: '/' },
        { name: '첩보', to: '/' },
        { name: '자원', to: '/' },
      ],
    },
  ];

  return (
    <aside
      className="sidebar-basis min-h-full bg-gray-50 dark:bg-slate-800 cyan:bg-teal-600"
      role="navigation"
      aria-label="Main"
    >
      <div className="h-full px-3 py-4 overflow-y-auto ">
        <ul className="space-y-2 font-medium">
          {menuItems.map(item => {
            const { name, to, children } = item;
            return (
              <Disclosure as="li" className="list-none" key={name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cyan:hover:bg-teal-500 cyan:text-gray-200 justify-between">
                      <Disclosure.Link className="flex w-full gap-x-2" to={to}>
                        <ClockIcon className="w-6 h-6 text-gray-500 transition duration-75 cyan:text-gray-200 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="">{name}</span>
                      </Disclosure.Link>
                      <ChevronRightIcon
                        className={`flex flex-none w-6 h-6 text-gray-500 transition duration-75 cyan:text-gray-200 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                          open ? 'rotate-90 transform' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      as={Disclosure.Panel}
                      enter="transfrom-all transition duration-300"
                      enterTo="scale-y-1"
                      enterFrom="scale-y-0"
                      leave="transfrom transition duration-300"
                      leaveTo="scale-y-0"
                      leaveFrom="scale-y-1"
                      className={`h-[${children.length * 40}px]`}
                    >
                      {children.map(childItem => {
                        const { name, to } = childItem;
                        return (
                          <Disclosure.Link key={name} className="flex-grow flex w-full gap-x-2" to={to}>
                            <Button className="w-full pl-5 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cyan:hover:bg-teal-500 cyan:text-gray-200 justify-between">
                              {name}
                            </Button>
                          </Disclosure.Link>
                        );
                      })}
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
