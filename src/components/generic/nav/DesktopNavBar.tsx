import React, { FC, Fragment } from 'react';

import { desktopNavItems } from './navItems';

export const DesktopNavBar: FC = () => {
  return (
    <div className={'container mx-auto py-4 px-2 border-b border-gray-300'}>
      <div className={'w-full flex items-center'}>
        {desktopNavItems.map((navItem, index) => (
          <Fragment key={index}>
            <div className={'flex-auto mx-auto'}>{navItem}</div>
            {index !== desktopNavItems.length - 1 && (
              <div className={'flex-grow-0'}>
                <VerticalDivider />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const VerticalDivider = () => (
  <div className={'h-8 mx-3 bg-jet-black-light'} style={{ width: '2px' }} />
);
