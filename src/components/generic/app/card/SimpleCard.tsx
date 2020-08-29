import React, { FC, ReactNode } from 'react';

interface SimpleCardProps {
  children: ReactNode;
}

export const SimpleCard: FC<SimpleCardProps> = ({ children }) => (
  <div
    className={`border border-gray-500 rounded-lg shadow-lg bg-white overflow-hidden`}
  >
    {children}
  </div>
);
