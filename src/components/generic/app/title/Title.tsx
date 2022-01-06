import React, { CSSProperties, FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  center?: boolean;
  style?: CSSProperties;
}

export const Title: FC<TitleProps> = ({ children, center, style }) => (
  <div className={center ? 'flex justify-center text-center' : ''}>
    <div
      className={
        'w-fit-content border-b-2 border-transparent transition-colors duration-500 ease-in-out hover:border-emerald-green'
      }
    >
      <p className={'font-medium text-2xl md:text-3xl'} style={style}>
        {children}
      </p>
    </div>
  </div>
);
