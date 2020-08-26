import React from 'react';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { Title } from '@components/generic';

import { conferencesAndMeetingsData } from '@assets/data/team-activities';
import { ConferenceAndMeetingCard } from '@components/team-activites';

export default function ConferencesAndMeetings() {
  console.log(conferencesAndMeetingsData);

  return (
    <Layout>
      <SEO title={'Conferences and Meetings'} />

      <div className={'space-y-8'}>
        <div>
          <Title>Conferences and Meetings</Title>
        </div>

        <div className={'space-y-8'}>
          {conferencesAndMeetingsData.map((conferenceAndMeeting, index) => (
            <div key={index}>
              <ConferenceAndMeetingCard
                conferenceAndMeeting={conferenceAndMeeting}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
