import React, { FunctionComponent, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  children,
}) => <div className={'py-4 px-2 px-10 lg:px-24'}>{children}</div>;
