import React, { FC } from 'react';
import { Calendar, DollarSign, Tag, UserPlus } from 'react-feather';

import {
  HoverableLinkCard,
  CardItemWithIcon,
  PeriodStartEnd,
} from '@components/generic';

interface CardProps {
  pageLink: string;
  title: string;
  fundingBody?: string;
  fundingAmount?: string;
  investigators?: string;
  projectStart?: string;
  projectEnd?: string;
}

export const ProjectCard: FC<CardProps> = ({
  pageLink,
  title,
  fundingBody,
  fundingAmount,
  investigators,
  projectStart,
  projectEnd,
}) => {
  const iconSize = '24px';

  return (
    <HoverableLinkCard pageLink={pageLink}>
      <div className={'p-8'}>
        <p className={'text-lg xl:text-xl font-semibold leading-tight'}>
          {title}
        </p>

        <div className={'m-4 space-y-4'}>
          {fundingBody && (
            <CardItemWithIcon
              icon={<Tag size={iconSize} />}
              component={<p>{fundingBody}</p>}
            />
          )}
          {fundingAmount && (
            <CardItemWithIcon
              icon={<DollarSign size={iconSize} />}
              component={<p>{fundingAmount}</p>}
            />
          )}
          {investigators && (
            <CardItemWithIcon
              icon={<UserPlus size={iconSize} />}
              component={<p>{investigators}</p>}
            />
          )}
          {projectStart && (
            <CardItemWithIcon
              icon={<Calendar size={iconSize} />}
              component={
                <PeriodStartEnd
                  start={new Date(projectStart)}
                  end={projectEnd ? new Date(projectEnd) : undefined}
                />
              }
            />
          )}
        </div>
      </div>
    </HoverableLinkCard>
  );
};
