import React, { FC, Fragment } from 'react';

import { desktopNavItems } from './navItems';
import { PageContainer } from '@components/layout';

export const DesktopNavBar: FC = () => {
  return (
    <div className={'border-b border-gray-300'}>
      <PageContainer>
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
      </PageContainer>
    </div>
  );
};

const VerticalDivider = () => (
  <div className={'h-8 mx-3 bg-jet-black-light'} style={{ width: '2px' }} />
);
