import React, { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  largerSpacing?: boolean;
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  largerSpacing,
  ...props
}) => (
  <div
    className={`${largerSpacing ? 'mt-12' : 'mt-8'} space-y-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);
