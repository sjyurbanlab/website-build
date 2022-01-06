import React, { CSSProperties, FC, ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  center?: boolean;
  style?: CSSProperties;
}

export const SubTitle: FC<SubTitleProps> = ({ children, center, style }) => (
  <p
    className={`font-medium text-xl md:text-2xl ${center ? 'text-center' : ''}`}
    style={style}
  >
    {children}
  </p>
);
