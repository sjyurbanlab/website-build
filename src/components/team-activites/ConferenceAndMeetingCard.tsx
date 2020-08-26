import React, { FC } from 'react';
import { ConferenceAndMeeting } from '@src/types/conferenceAndMeeting';
import { SimpleCard } from '@components/generic';

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
    photos,
    publishableResults,
  },
}) => {
  return <SimpleCard>{title}</SimpleCard>;
};
