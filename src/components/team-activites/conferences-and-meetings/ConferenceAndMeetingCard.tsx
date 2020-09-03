import React, { FC, useRef } from 'react';
import moment from 'moment';
import { Tag, MapPin, UserPlus, Calendar, Book } from 'react-feather';

import { useViewport } from '@hooks/useViewport';
import { useComponentBox } from '@hooks/useComponentBox';
import { ConferenceAndMeeting } from '@src/types/conferenceAndMeeting';

import {
  CardItemWithIcon,
  PeriodStartEnd,
  SimpleCard,
} from '@components/generic';
import { PhotoCarousel } from './PhotoCarousel';

interface ConferenceAndMeetingCardProps {
  conferenceAndMeeting: ConferenceAndMeeting;
}

export const ConferenceAndMeetingCard: FC<ConferenceAndMeetingCardProps> = ({
  conferenceAndMeeting: {
    title,
    organiser,
    location,
    labParticipants,
    link,
    eventPeriodStart,
    eventPeriodEnd,
    logos,
    photos,
    publishableResults,
  },
}) => {
  console.log({ logos });
  const iconSize = '24px';

  const { isMobile } = useViewport();

  const containerRef = useRef(null);
  const containerBox = useComponentBox(containerRef);
  const height = isMobile ? 200 : containerBox?.height || 300;

  return (
    <SimpleCard>
      <div ref={containerRef} className={'grid grid-cols-1 sm:grid-cols-3'}>
        {/* photo carousel */}
        {photos?.length ? (
          <div className={'col-span-1'}>
            <PhotoCarousel photos={photos} height={height} />
          </div>
        ) : null}

        {/* details */}
        <div
          className={`col-span-1 ${
            photos?.length ? 'sm:col-span-2' : 'sm:col-span-3'
          } p-8`}
        >
          <p className={'text-lg xl:text-xl font-semibold leading-tight'}>
            {title}
          </p>

          <div className={'m-4 space-y-4'}>
            <CardItemWithIcon
              icon={<Tag size={iconSize} />}
              component={<p>{organiser}</p>}
            />

            <CardItemWithIcon
              icon={<MapPin size={'24px'} />}
              component={<p>{location}</p>}
            />

            <CardItemWithIcon
              icon={<UserPlus size={iconSize} />}
              component={
                <p>
                  {labParticipants.map((labParticipant, index) => (
                    <span key={index}>{`${labParticipant}${
                      index !== labParticipants.length - 1 ? ', ' : ''
                    }`}</span>
                  ))}
                </p>
              }
            />

            {eventPeriodStart && (
              <CardItemWithIcon
                icon={<Calendar size={iconSize} />}
                component={
                  <PeriodStartEnd
                    start={eventPeriodStart}
                    end={eventPeriodEnd}
                    dateFormat={'DD MMMM YYYY'}
                  />
                }
              />
            )}

            {publishableResults?.length ? (
              <CardItemWithIcon
                containerClassName={'flex items-start'}
                shouldOverrideContainerClassName={true}
                icon={<Book size={iconSize} />}
                component={
                  <div className={'space-y-2'}>
                    {publishableResults.map(
                      (
                        { name, date, authors, link, externalCollaborators },
                        index
                      ) => (
                        <div key={index} className={'space-y-1'}>
                          <p>
                            {name}
                            <span className={'ml-2 text-xs text-gray-500'}>
                              {moment(date).format('DD MMMM YYYY')}
                            </span>
                          </p>
                          <div className={'text-sm'}>
                            <div className={'grid grid-cols-3 col-gap-2'}>
                              {authors?.length ? (
                                <>
                                  <div className={'col-span-1'}>
                                    <p
                                      className={'text-gray-500 text-right'}
                                    >{`Authors: `}</p>
                                  </div>
                                  <div className={'col-span-2'}>
                                    <p>
                                      {authors.map((author, index) => (
                                        <span key={index}>{`${author}${
                                          index !== authors.length - 1
                                            ? ', '
                                            : ''
                                        }`}</span>
                                      ))}
                                    </p>
                                  </div>
                                </>
                              ) : null}
                              {externalCollaborators?.length ? (
                                <>
                                  <div className={'col-span-1'}>
                                    <p
                                      className={'text-gray-500 text-right'}
                                    >{`External collaborators: `}</p>
                                  </div>
                                  <div className={'col-span-2'}>
                                    <p>
                                      {externalCollaborators.map(
                                        (collaborator, index) => (
                                          <span key={index}>{`${collaborator}${
                                            index !==
                                            externalCollaborators.length - 1
                                              ? ', '
                                              : ''
                                          }`}</span>
                                        )
                                      )}
                                    </p>
                                  </div>
                                </>
                              ) : null}
                            </div>
                            {link && (
                              <a
                                className={'block'}
                                href={link}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                              >
                                Read more
                              </a>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                }
              />
            ) : null}
          </div>

          {logos ? (
            <div
              className={'ml-auto w-fit-content flex justify-between space-x-2'}
            >
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo ${index}`}
                  className={'block h-12 w-auto flex-none'}
                />
              ))}
            </div>
          ) : null}

          {link ? (
            <p className={'text-center'}>
              <a
                className={'block'}
                href={link}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                Find Out More
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </SimpleCard>
  );
};
