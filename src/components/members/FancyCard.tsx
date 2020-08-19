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

import { LabLead } from '@src/types/labLead';
import { Image, InnerImage } from '@components/generic';
import {
  avatarPlaceholder,
  colorfulGreenBackgroundImage,
} from '@assets/images';

interface FancyCardProps {
  labLead: LabLead;
}

export const FancyCard: FC<FancyCardProps> = ({
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
        <a
          href={`mailto:${email}`}
          target={'_blank'}
          rel={'noopener noreferrer'}
          className={'text-white font-bold hover:text-white'}
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
    <div className={'text-white rounded-xl relative overflow-hidden p-4'}>
      <InnerImage
        src={colorfulGreenBackgroundImage}
        alt={'colorful green background'}
      />

      <div className={'relative'}>
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
              className={
                'flex items-center md:items-baseline flex-col md:flex-row'
              }
            >
              <p
                className={'text-xl'}
              >{`${salutation} ${firstName} ${lastName}`}</p>

              <p className={'font-light text-sm md:ml-2'}>{position}</p>
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
                    <p className={'text-lg font-bold'}>{title}</p>
                    <div className={'space-y-2'}>
                      {list.map((element, index) => (
                        <div key={index} className={'flex'}>
                          <div className={'p-2'}>
                            <div className={'bg-white w-1 h-1 rounded-full'} />
                          </div>
                          <p>{element}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateHeight>

          <div
            className={
              'text-emerald-green-light font-bold w-full text-center cursor-pointer'
            }
            onClick={() => setShowMore(!showMore)}
          >{`See ${showMore ? 'Less' : 'More'}`}</div>
        </div>
      </div>
    </div>
  );
};
