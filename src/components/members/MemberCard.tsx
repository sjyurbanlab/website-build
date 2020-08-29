import React, { FC } from 'react';
import { Calendar, Coffee, FileText, Mail } from 'react-feather';

import { Image, PeriodStartEnd } from '@components/generic';

import { Member } from '@src/types/member';
import { avatarPlaceholder } from '@assets/images';

interface CardProps {
  member: Member;
}

export const MemberCard: FC<CardProps> = ({
  member: {
    avatar,
    firstName,
    lastName,
    salutation,
    position,
    email,
    introduction,
    affiliationPeriodStart,
    affiliationPeriodEnd,
    cv,
  },
}) => {
  const iconSize = '24px';

  const fields = [
    {
      icon: <Mail size={iconSize} />,
      component: (
        <a
          href={`mailto:${email}`}
          target={'_blank'}
          rel={'noopener noreferrer'}
          className={'text-cobalt-blue font-bold hover:text-cobalt-blue-light'}
        >
          {email}
        </a>
      ),
    },
    {
      icon: <Coffee size={iconSize} />,
      component: introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      )),
    },
  ]
    .concat(
      affiliationPeriodStart
        ? [
            {
              icon: <Calendar size={iconSize} />,
              component: (
                <div className={'flex items-baseline space-x-1'}>
                  <p className={'inline-block'}>{`Affiliated since `}</p>
                  <PeriodStartEnd
                    start={affiliationPeriodStart}
                    end={affiliationPeriodEnd}
                  />
                </div>
              ),
            },
          ]
        : []
    )
    .concat(
      cv
        ? [
            {
              icon: <FileText size={iconSize} />,
              component: (
                <button className={'button button-emerald-green p-0'}>
                  <a
                    href={cv}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className={
                      'inline-block px-10 py-3 no-underline text-white hover:no-underline hover:text-white focus:border-none'
                    }
                  >
                    Get CV
                  </a>
                </button>
              ),
            },
          ]
        : []
    );

  return (
    <div className={'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'}>
      <div className={'col-span-1 my-2'}>
        <div
          className={
            'w-full mx-auto border-8 border-emerald-green rounded-full'
          }
          style={{ maxWidth: '200px' }}
        >
          <Image
            src={avatar}
            alt={firstName}
            circular
            fallbackSrc={avatarPlaceholder}
          />
        </div>
      </div>

      <div className={'col-span-1 md:col-span-2 xl:col-span-3 space-y-4'}>
        <div
          className={'flex items-center md:items-baseline flex-col md:flex-row'}
        >
          <p className={'text-xl'}>{`${
            salutation ? `${salutation} ` : ``
          }${firstName} ${lastName}`}</p>

          <p className={'font-light text-sm md:ml-2'}>{position}</p>
        </div>

        <div className={'space-y-2'}>
          {fields.map(({ icon, component }, index) => (
            <div className={'flex items-center'} key={index}>
              <div className={'text-emerald-green mr-4 md:mr-6'}>{icon}</div>
              <div>{component}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
