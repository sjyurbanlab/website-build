import React, { FC } from 'react';
import moment from 'moment';

import { SimpleCard } from '@components/generic';

import { news } from '@assets/data';

export const News: FC = () => {
  return (
    <SimpleCard>
      <div className={'p-4'}>
        <h4 className={'text-center'}>News</h4>

        <p
          className={
            'text-center text-xxs md:text-xs tracking-wide text-gray-500 uppercase'
          }
        >
          Find out the latest developments in our lab
        </p>

        <div
          className={'mt-2 md:mt-4 overflow-auto divide-y divide-gray-400'}
          style={{ maxHeight: '30rem' }}
        >
          {news?.map(({ image, title, content, author, date, link }, index) => (
            <div
              key={index}
              className={`py-4 pl-2 pr-4 hover:bg-gray-100 ${
                link ? 'cursor-pointer' : ''
              }`}
              onClick={() => link && window && window.open(link, '_black')}
            >
              {image && (
                <img
                  className={'float-right ml-2 my-2 h-20 max-w-xs object-cover'}
                  src={image}
                  alt={title}
                />
              )}
              <p className={'font-semibold'}>{title}</p>
              <p className={'mt-1 text-sm text-gray-700 font-light'}>
                {content}
              </p>
              <div
                className={
                  'mt-2 flex items-baseline justify-between text-sm font-semibold'
                }
              >
                <p className={'text-cobalt-blue'}>{link ? 'See more' : ''}</p>
                <p>
                  By {author}{' '}
                  <span className={'ml-2 text-xs text-gray-500'}>
                    {moment(date).calendar()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SimpleCard>
  );
};
