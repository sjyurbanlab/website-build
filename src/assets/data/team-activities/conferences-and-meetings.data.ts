import rawConferencesAndMeetings from './conferences-and-meetings.json';
import { ConferenceAndMeeting } from '@src/types/conferenceAndMeeting';

export const conferencesAndMeetingsData: ConferenceAndMeeting[] = Object.entries(
  rawConferencesAndMeetings
)
  .map(([key, conferenceAndMeeting]: [string, any]) => ({
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
    logos: conferenceAndMeeting.logos,
    photos: conferenceAndMeeting.photos,
    publishableResults: conferenceAndMeeting.publishableResults?.map(
      (publishableResult: any) => ({
        ...publishableResult,
        date: new Date(publishableResult.date),
      })
    ),
  }))
  .sort((a, b) => a.id - b.id);
