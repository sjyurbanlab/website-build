import React, { createRef, useRef } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OtherMembersMdxQuery } from '../../../graphql-types';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { SubTitle, Sidebar, Title } from '@components/generic';
import { MemberCard, LabLeadCard } from '@components/members';

import { labLeadData, memberGroupsData } from '@assets/data';

interface PresentProps {
  data: OtherMembersMdxQuery;
}

export default function Present({ data }: PresentProps) {
  const otherMembersExist = Boolean(data.mdx?.rawBody);
  const otherMembers = data.mdx?.body;

  const linkTitles: string[] = ['Lab Lead'].concat(
    memberGroupsData.map(({ groupName }) => groupName)
  );
  if (otherMembersExist) linkTitles.push('Other Affiliated Members');

  // sidebar link refs
  const linksRef = useRef<any>(linkTitles.map(() => createRef()));

  return (
    <Layout>
      <SEO title={'Present Members'} />

      <div className={'space-y-6'}>
        <Title>Present Members</Title>

        <Sidebar linksRef={linksRef} linkTitles={linkTitles}>
          <div className={'space-y-8'}>
            {/* lab lead (json) */}
            <div ref={linksRef.current[0]}>
              <LabLeadCard labLead={labLeadData} />
            </div>

            {/* members (json) */}
            <div className={'space-y-12'}>
              {memberGroupsData.map(({ groupName, members }, index) => (
                <div ref={linksRef.current[index + 1]} key={index}>
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

            {/* other members (mdx) */}
            {otherMembersExist && otherMembers && (
              <div ref={linksRef.current[linkTitles.length - 1]}>
                <MDXRenderer>{otherMembers}</MDXRenderer>
              </div>
            )}
          </div>
        </Sidebar>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query OtherMembersMdx {
    mdx(fileAbsolutePath: { regex: "/OtherMembers/" }) {
      body
      rawBody
    }
  }
`;
