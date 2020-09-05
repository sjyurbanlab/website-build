export type ConferenceAndMeeting = {
  id: number | string;
  title: string;
  organiser: string;
  location: string;
  labParticipants: string[];
  link?: string;
  eventPeriodStart?: Date;
  eventPeriodEnd?: Date;
  logos?: string[];
  photos?: string[];
  publishableResults?: {
    name: string;
    date: Date;
    authors?: string[];
    link?: string;
    externalCollaborators?: string[];
  }[];
};
