import React, { FunctionComponent, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  children,
}) => (
  <div className={'container mx-auto py-4 px-2 md:p-6 lg:py-8 lg:px-10'}>
    {children}
  </div>
);
