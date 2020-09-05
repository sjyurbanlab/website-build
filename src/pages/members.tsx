import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OtherMembersMdxQuery } from '../../graphql-types';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { SubTitle } from '@components/generic';
import { MemberCard, LabLeadCard } from '@components/members';

import { labLeadData, memberGroupsData } from '@assets/data';

interface MembersProps {
  data: OtherMembersMdxQuery;
}

export default function Members({ data }: MembersProps) {
  const otherMembers = data.mdx?.body;

  return (
    <Layout>
      <SEO title={'Members'} />

      <div className={'space-y-8 md:space-y-20'}>
        {/* lab lead (json) */}
        <div>
          <LabLeadCard labLead={labLeadData} />
        </div>

        {/* members (json) */}
        <div className={'space-y-12'}>
          {memberGroupsData.map(({ groupName, members }, index) => (
            <div key={index}>
              <SubTitle>{groupName}</SubTitle>
              <div className={'mt-4 space-y-8'}>
                {members.map((member, index) => (
                  <div key={index}>
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* members (mdx) */}
        {otherMembers && (
          <div>
            <MDXRenderer>{otherMembers}</MDXRenderer>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query OtherMembersMdx {
    mdx(fileAbsolutePath: { regex: "/OtherMembers$/" }) {
      body
    }
  }
`;
