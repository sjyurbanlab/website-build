import { ReactNode } from 'react';

export interface NavItemProps {
  title: string;
  basePath: string;
  isNotALink: boolean;
  items?: { path: string; child: ReactNode }[];
}
