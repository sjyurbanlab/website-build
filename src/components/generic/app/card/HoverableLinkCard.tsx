import React, { FC, ReactNode } from 'react';
import { navigate } from 'gatsby-link';

import { SimpleCard } from './SimpleCard';

interface HoverableLinkCardProps {
  pageLink?: string;
  children: ReactNode;
}

export const HoverableLinkCard: FC<HoverableLinkCardProps> = ({
  pageLink,
  children,
}) => (
  <div
    className={
      pageLink
        ? 'cursor-pointer transition-transform duration-100 transform hover:scale-102'
        : ''
    }
    onClick={() => pageLink && navigate(pageLink)}
  >
    <SimpleCard>{children}</SimpleCard>
  </div>
);
