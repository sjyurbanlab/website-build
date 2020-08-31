import React, { FC, ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  className?: string;
  shouldOverrideClassName?: boolean;
  shouldOpenNewTab?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  shouldOverrideClassName,
  shouldOpenNewTab = true,
  ...props
}) => (
  <a
    className={shouldOverrideClassName ? `${className}` : `${className}`}
    target={shouldOpenNewTab ? '_blank' : ''}
    rel={shouldOpenNewTab ? 'noopener noreferrer' : ''}
    {...props}
  >
    {children}
  </a>
);
