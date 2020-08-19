import React from 'react';

import { NavItemProps } from './NavItemProps';
import { routes } from '@src/routes';
import { MobileNavItem } from '@components/generic/nav/MobileNavItem';
import { DesktopNavItem } from '@components/generic/nav/DesktopNavItem';

const navItems: NavItemProps[] = routes.map(
  ({ path, title, isNotALink, childrenRoutes }) => ({
    basePath: path,
    title,
    isNotALink: Boolean(isNotALink),
    items: childrenRoutes?.map(({ path, title }) => ({
      path,
      child: <p>{title}</p>,
    })),
  })
);

export const mobileNavItems = navItems.map((item) => (
  <MobileNavItem {...item} />
));

export const desktopNavItems = navItems.map((item) => (
  <DesktopNavItem {...item} />
));
