import React, { FC } from 'react';
import { DesktopNavBar } from './DesktopNavBar';
import { MobileNavBar } from './MobileNavBar';

export const NavBar: FC = () => {
  return (
    <>
      <div className={'block md:hidden'}>
        <MobileNavBar />
      </div>
      <div className={'hidden md:block'}>
        <DesktopNavBar />
      </div>
    </>
  );
};
