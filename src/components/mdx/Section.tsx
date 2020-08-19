import React, { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  shouldOverrideClassName?: boolean;
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  shouldOverrideClassName,
  ...props
}) => (
  <div
    className={shouldOverrideClassName ? `${className}` : `mt-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);
