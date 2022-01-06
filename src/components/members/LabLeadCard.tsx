import React, { FC, useState } from 'react';
import {
  Clipboard,
  Coffee,
  FileText,
  Globe,
  Mail,
  PenTool,
  Users,
} from 'react-feather';
import AnimateHeight from 'react-animate-height';

import { Image, InnerImage, Link, SubTitle } from '@components/generic';

import { LabLead } from '@src/types/labLead';

import {
  avatarPlaceholder,
  colorfulGreenBackgroundImage,
} from '@assets/images';

interface FancyCardProps {
  labLead: LabLead;
}

export const LabLeadCard: FC<FancyCardProps> = ({
  labLead: {
    avatar,
    firstName,
    lastName,
    salutation,
    position,
    email,
    introduction,
    researchInterests,
    academicMemberships,
    professionalMemberships,
    teachingList,
    cv,
  },
}) => {
  const iconSize = '24px';

  const fields = [
    {
      icon: <Mail size={iconSize} />,
      component: (
        <Link
          href={`mailto:${email}`}
          className={'text-white font-semibold hover:text-white'}
        >
          {email}
        </Link>
      ),
    },
    {
      icon: <Coffee size={iconSize} />,
      component: introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      )),
    },
  ].concat(
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

  const [showMore, setShowMore] = useState<boolean>(false);

  const collapsibleFields = [
    {
      icon: <Clipboard size={iconSize} />,
      title: 'Research Interests',
      list: researchInterests,
    },
    {
      icon: <PenTool size={iconSize} />,
      title: 'Academic Memberships',
      list: academicMemberships,
    },
    {
      icon: <Globe size={iconSize} />,
      title: 'Professional Memberships',
      list: professionalMemberships,
    },
    {
      icon: <Users size={iconSize} />,
      title: 'Teaching List',
      list: teachingList,
    },
  ];

  return (
    <div>
      <SubTitle>Lab Lead</SubTitle>

      <div
        className={'mt-4 text-white rounded-lg shadow-md relative overflow-hidden p-4'}
      >
        <InnerImage
          src={colorfulGreenBackgroundImage}
          alt={'colorful green background'}
        />

        <div className={'relative'}>
          <div
            className={'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'}
          >
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
                className={'text-center md:flex md:items-baseline md:space-x-2'}
              >
                <p className={'text-xl'}>{`${
                  salutation ? `${salutation} ` : ``
                }${firstName} ${lastName}`}</p>

                <p className={'font-light text-sm'}>{position}</p>
              </div>

              <div className={'space-y-2'}>
                {fields.map(({ icon, component }, index) => (
                  <div className={'flex items-center'} key={index}>
                    <div className={'text-emerald-green mr-4 md:mr-6'}>
                      {icon}
                    </div>
                    <div>{component}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={'mx-4 my-6 space-y-4'}>
            <AnimateHeight height={showMore ? 'auto' : 0} duration={200}>
              <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
                {collapsibleFields.map(({ icon, title, list }, index) => (
                  <div className={'col-span-1 flex items-start'} key={index}>
                    <div className={'text-emerald-green mr-4 md:mr-6'}>
                      {icon}
                    </div>
                    <div>
                      <p className={'text-lg font-medium'}>{title}</p>
                      <ul className={'list-disc list-inside space-y-2'}>
                        {list.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateHeight>

            <div
              className={
                'text-emerald-green-light text-sm w-full text-center cursor-pointer'
              }
              onClick={() => setShowMore(!showMore)}
            >{`see ${showMore ? 'less' : 'more'}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
