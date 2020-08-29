import rawConferencesAndMeetings from './conferences-and-meetings.json';
import { ConferenceAndMeeting } from '@src/types/conferenceAndMeeting';

export const conferencesAndMeetingsData: ConferenceAndMeeting[] = Object.entries(
  rawConferencesAndMeetings
)
  .map(([key, conferenceAndMeeting]) => ({
    id: Number(key),
    title: conferenceAndMeeting.title,
    organiser: conferenceAndMeeting.organiser,
    location: conferenceAndMeeting.location,
    labParticipants: conferenceAndMeeting.labParticipants,
    link: conferenceAndMeeting.link,
    eventPeriodStart: conferenceAndMeeting.eventPeriodStart
      ? new Date(conferenceAndMeeting.eventPeriodStart)
      : undefined,
    eventPeriodEnd: conferenceAndMeeting.eventPeriodEnd
      ? new Date(conferenceAndMeeting.eventPeriodEnd)
      : undefined,
    photos: conferenceAndMeeting.photos,
    publishableResults: conferenceAndMeeting.publishableResults?.map(
      (publishableResult) => ({
        ...publishableResult,
        date: new Date(publishableResult.date),
      })
    ),
  }))
  .sort((a, b) => a.id - b.id);
