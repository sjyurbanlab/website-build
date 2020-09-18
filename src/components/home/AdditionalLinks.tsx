import React, { FC } from 'react';

import { SimpleCard, Link as GenericLink } from '@components/generic';

import { additionalLinks } from '@assets/data';
import { Link } from '@src/types/additionalLinks';

export const AdditionalLinks: FC = () => {
  const { publicationLinks, otherLinks } = additionalLinks;

  return (
    <SimpleCard>
      <div className={'p-4'}>
        <h4 className={'text-center'}>Additional Links</h4>
        <p
          className={
            'text-center text-xxs md:text-xs tracking-wide text-gray-500 uppercase'
          }
        >
          Find out more about what we do, and what we have achieved
        </p>

        <div
          className={'mt-2 md:mt-4 overflow-auto'}
          style={{ maxHeight: '30rem' }}
        >
          {/* publication links */}
          {publicationLinks?.length ? (
            <div>
              <p className={'font-semibold'}>Publications</p>
              <p
                className={
                  'text-xxs md:text-xs tracking-wide text-gray-500 uppercase'
                }
              >
                Read our published work from these platforms
              </p>

              <div className={'mt-2 md:mt-3 '}>
                <Links links={publicationLinks} />
              </div>
            </div>
          ) : null}

          {/* other links */}
          {otherLinks?.length ? (
            <div className={'mt-4 pt-4 border-t border-gray-400'}>
              <p className={'font-semibold'}>Other Links</p>
              <p
                className={
                  'text-xxs md:text-xs tracking-wide text-gray-500 uppercase'
                }
              >
                Obtain more information about us from various sources
              </p>

              <div className={'mt-2 md:mt-3 '}>
                <Links links={otherLinks} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </SimpleCard>
  );
};

const Links: FC<{ links: Link[] }> = ({ links }) => (
  <div className={'space-y-2 md:space-y-3 mx-2'}>
    {links.map(({ link, title }, index) => (
      <div key={index}>
        <p>{title}</p>
        <GenericLink className={'block'} href={link}>
          {link}
        </GenericLink>
      </div>
    ))}
  </div>
);
