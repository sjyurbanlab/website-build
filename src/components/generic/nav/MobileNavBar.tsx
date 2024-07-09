import React, { FC, useRef, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { AlignJustify, X } from 'react-feather';
import { navigate } from 'gatsby';

import { mobileNavItems } from './navItems';
import { useComponentBox } from '@src/hooks/useComponentBox';

export const MobileNavBar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const topBarRef = useRef(null);
  const { height } = useComponentBox(topBarRef);

  return (
    <div className={'relative'}>
      <div
        ref={topBarRef}
        className={
          'w-full flex items-center text-white bg-emerald-green py-2 px-3'
        }
      >
        <div className={'w-fit-content mx-2'} onClick={() => setShow(!show)}>
          {!show ? <AlignJustify size={'30px'} /> : <X size={'30px'} />}
        </div>
        <p className={'px-2 font-bold'} onClick={() => navigate('/')}>
          Healthy Cities Lab at WHU & HKU
      </div>

      <div
        className={'absolute w-full overflow-auto'}
        style={{ top: height, maxHeight: `calc(100vh - ${height}px)` }}
      >
        <AnimateHeight height={show ? 'auto' : 0} duration={200}>
          <div
            className={'w-full bg-gray-200 px-3 py-2 flex flex-col'}
            onClick={() => setShow(false)}
          >
            {mobileNavItems.map((navItem, index) => (
              <div key={index} className={'w-full'}>
                {navItem}
              </div>
            ))}
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};
