import React, { FC, ReactNode } from 'react';

interface SimpleCardProps {
  children: ReactNode;
}

export const SimpleCard: FC<SimpleCardProps> = ({ children }) => (
  <div className={`border border-gray-500 rounded-lg shadow-lg p-8 bg-white`}>
    {children}
  </div>
);
