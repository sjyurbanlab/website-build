import React, { FC, ReactNode } from 'react';

import { useViewport } from '@hooks/useViewport';

interface SidebarProps {
  linksRef: any;
  linkTitles: string[];
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({
  linksRef,
  linkTitles,
  children,
}) => {
  const { navBarHeight } = useViewport();

  const scrollTo = (ref: any) =>
    window.scrollTo(0, ref.current.offsetTop - navBarHeight - 10);

  const buttons = linksRef.current.map((ref: any, index: number) => (
    <button
      key={index}
      className={'block w-full button text-left'}
      onClick={() => scrollTo(ref)}
    >
      {linkTitles[index]}
    </button>
  ));

  return (
    <>
      {/* mobile */}
      <div className={'block lg:hidden'}>
        <div
          className={
            'sticky flex items-baseline justify-between overflow-x-auto bg-white space-x-4'
          }
        >
          {buttons}
        </div>
        <div>{children}</div>
      </div>

      {/* desktop */}
      <div className={'hidden lg:block'}>
        <div className={'grid grid-cols-4 gap-4 xl:gap-8'}>
          <div className={'col-span-1'}>
            <div className={'fixed'}>{buttons}</div>
          </div>

          <div className={'col-span-3'}>{children}</div>
        </div>
      </div>
    </>
  );
};
