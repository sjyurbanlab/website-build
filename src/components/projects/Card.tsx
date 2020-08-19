import React, { FC, ReactNode } from 'react';
import moment from 'moment';
import { navigate } from 'gatsby';
import { Calendar, DollarSign, Tag, UserPlus } from 'react-feather';

interface CardProps {
  pageLink: string;
  title: string;
  fundingBody?: string;
  fundingAmount?: string;
  investigators?: string;
  projectStart?: string;
  projectEnd?: string;
}

export const Card: FC<CardProps> = ({
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
    <div
      className={
        'border border-gray-500 rounded-lg shadow-lg p-8 cursor-pointer bg-white transition-transform duration-100 transform hover:scale-102'
      }
      onClick={() => navigate(pageLink)}
    >
      <p className={'text-lg xl:text-xl font-semibold leading-tight'}>
        {title}
      </p>

      <div className={'m-4 space-y-4'}>
        {fundingBody && (
          <Item
            icon={<Tag size={iconSize} />}
            component={<p>{fundingBody}</p>}
          />
        )}
        {fundingAmount && (
          <Item
            icon={<DollarSign size={iconSize} />}
            component={<p>{fundingAmount}</p>}
          />
        )}
        {investigators && (
          <Item
            icon={<UserPlus size={iconSize} />}
            component={<p>{investigators}</p>}
          />
        )}
        {projectStart && (
          <Item
            icon={<Calendar size={iconSize} />}
            component={
              <div className={'space-x-1'}>
                <p className={'inline-block font-semibold'}>
                  {moment(projectStart).format('MMMM YYYY')}
                </p>
                {projectEnd && (
                  <>
                    <p className={'inline-block'}>till</p>
                    <p className={'inline-block'}>
                      {moment(projectEnd).format('MMMM YYYY')}
                    </p>
                  </>
                )}
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

const Item: FC<{ icon: ReactNode; component: ReactNode }> = ({
  icon,
  component,
}) => (
  <div className={'flex items-center'}>
    <div className={'text-emerald-green mr-4 md:mr-6'}>{icon}</div>
    <div>{component}</div>
  </div>
);
