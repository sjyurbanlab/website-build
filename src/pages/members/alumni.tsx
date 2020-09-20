import React, { createRef, useRef } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OtherAlumniMdxQuery } from '../../../graphql-types';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { SubTitle, Sidebar, Title } from '@components/generic';
import { MemberCard } from '@components/members';

import { alumnusGroupsData } from '@assets/data';

interface AlumniProps {
  data: OtherAlumniMdxQuery;
}

export default function Alumni({ data }: AlumniProps) {
  const otherAlumniExist = Boolean(data.mdx?.rawBody);
  const otherAlumni = data.mdx?.body;

  const linkTitles: string[] = alumnusGroupsData.map(
    ({ groupName }) => groupName
  );
  if (otherAlumniExist) linkTitles.push('Other Alumni');

  // sidebar link refs
  const linksRef = useRef<any>(linkTitles.map(() => createRef()));

  return (
    <Layout>
      <SEO title={'Alumni'} />

      <div className={'space-y-6'}>
        <Title>Alumni</Title>

        <Sidebar linksRef={linksRef} linkTitles={linkTitles}>
          <div className={'space-y-8'}>
            {/* alumni (json) */}
            <div className={'space-y-12'}>
              {alumnusGroupsData.map(({ groupName, members }, index) => (
                <div ref={linksRef.current[index]} key={index}>
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
            {otherAlumniExist && otherAlumni && (
              <div ref={linksRef.current[linkTitles.length - 1]}>
                <MDXRenderer>{otherAlumni}</MDXRenderer>
              </div>
            )}
          </div>
        </Sidebar>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query OtherAlumniMdx {
    mdx(fileAbsolutePath: { regex: "/OtherAlumni/" }) {
      body
      rawBody
    }
  }
`;
