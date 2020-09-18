import React, { FC, ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  shouldOpenNewTab?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  shouldOpenNewTab = true,
  ...props
}) => (
  <a
    className={className}
    target={shouldOpenNewTab ? '_blank' : ''}
    rel={shouldOpenNewTab ? 'noopener noreferrer' : ''}
    {...props}
  >
    {children}
  </a>
);
