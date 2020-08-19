import React, { FC } from 'react';
import { Link, navigate } from 'gatsby';

import { NavItemProps } from './NavItemProps';

export const MobileNavItem: FC<NavItemProps> = ({
  title,
  basePath,
  isNotALink,
  items,
}) => {
  return (
    <div className={'my-1 border-b border-emerald-green-light text-jet-black'}>
      <div
        onClick={async () => {
          if (!isNotALink) await navigate(basePath);
        }}
      >
        <p
          className={
            'my-1 font-bold text-jet-black-dark tracking-wider uppercase'
          }
        >
          {title}
        </p>
      </div>

      <div className={'ml-3'}>
        {items?.map(({ path, child }, index) => (
          <div key={index} className={'my-1 text-sm text-jet-black-light'}>
            <Link
              key={index}
              to={`${basePath}${path}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                padding: '0.8rem 0',
              }}
            >
              {child}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
