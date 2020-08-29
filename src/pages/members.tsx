import React from 'react';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { Title } from '@components/generic';
import { MemberCard, LabLeadCard } from '@components/members';
import { labLeadData, membersData } from '@assets/data';

export default function Members() {
  return (
    <Layout>
      <SEO title={'Members'} />

      <div className={'space-y-8'}>
        <div>
          <Title>Key Members</Title>
        </div>

        <div>
          <LabLeadCard labLead={labLeadData} />
        </div>

        <div className={'space-y-8'}>
          {membersData.map((member, index) => (
            <div key={index}>
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
