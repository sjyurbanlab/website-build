import React, { FC, useState } from 'react';
import { Link, navigate } from 'gatsby';
import { Collapse } from 'react-collapse';

import { NavItemProps } from './NavItemProps';

export const DesktopNavItem: FC<NavItemProps> = ({
  title,
  basePath,
  isNotALink,
  items,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={'relative text-jet-black'}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`border-b-2 border-transparent py-1 hover:border-emerald-green text-base md:text-sm lg:text-lg font-semibold ${
          isNotALink ? 'cursor-default' : 'cursor-pointer'
        }`}
        onClick={async () => {
          if (!isNotALink) await navigate(basePath);
        }}
      >
        <p className={'text-center'}>{title}</p>
      </div>
      {items && (
        <div
          className={
            'absolute w-full bg-gray-100 overflow-hidden rounded-b shadow-md text-xxs lg:text-xs xl:text-sm leading-tight'
          }
          // style={{ minWidth: 250 }}
        >
          <Collapse isOpened={isOpen}>
            {items.map(({ path, child }, index) => (
              <div key={index} className={'hover:bg-gray-300'}>
                <Link
                  to={`${basePath}${path}`}
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                    padding: '0.75rem 0.5rem',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {child}
                </Link>
              </div>
            ))}
          </Collapse>
        </div>
      )}
    </div>
  );
};
