import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  shouldOverrideClassName?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  shouldOverrideClassName,
  ...props
}) => (
  <button
    className={
      shouldOverrideClassName
        ? className
        : `button button-emerald-green ${className}`
    }
    {...props}
  >
    {children}
  </button>
);
