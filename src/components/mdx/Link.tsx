import React, { FC, ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  className?: string;
  shouldOverrideClassName?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  shouldOverrideClassName,
  ...props
}) => (
  <a
    className={shouldOverrideClassName ? `${className}` : `${className}`}
    {...props}
  >
    {children}
  </a>
);
