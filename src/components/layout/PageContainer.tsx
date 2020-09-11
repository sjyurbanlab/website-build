import React, { FunctionComponent, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  children,
}) => <div className={'p-4 md:px-10 lg:px-16 xl:px-24'}>{children}</div>;
