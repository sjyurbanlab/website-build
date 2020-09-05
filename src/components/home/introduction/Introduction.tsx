import React, { FC } from 'react';
import { MobileIntroduction } from './MobileIntroduction';
import { DesktopIntroduction } from './DesktopIntroduction';

import { introduction } from '@assets/data';

export const Introduction: FC = () => {
  return (
    <>
      <div className={'block lg:hidden'}>
        <MobileIntroduction introduction={introduction} />
      </div>
      <div className={'hidden lg:block'}>
        <DesktopIntroduction introduction={introduction} />
      </div>
    </>
  );
};
