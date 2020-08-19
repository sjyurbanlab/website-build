import React from 'react';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { Title } from '@components/generic';
import { Card, FancyCard } from '@components/members';
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
          <FancyCard labLead={labLeadData} />
        </div>

        <div className={'space-y-8'}>
          {membersData.map((member, index) => (
            <div key={index}>
              <Card member={member} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
