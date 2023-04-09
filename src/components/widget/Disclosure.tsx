/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-redeclare */
import { Children } from 'react';
import React from 'react';
import { NavLink, LinkProps } from 'react-router-dom';

import { Disclosure } from '@headlessui/react';
type CustomDisclosure = typeof Disclosure & {
  Link: typeof Link;
  SubLink: typeof SubLink;
};

interface SubLinkProps {
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
}

const SubLink = React.memo(({ as, children }: SubLinkProps) => {
  const As = as || 'div';
  return <As>{children}</As>;
});
SubLink.displayName = 'SubLink';

const Link = ({ children, ...props }: LinkProps) => {
  return <NavLink {...props}>{children}</NavLink>;
};

Object.assign(Disclosure, { Link, SubLink });
export default Disclosure as CustomDisclosure;
