import React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { OngoingProjectsMdxQuery } from '../../../../graphql-types';
import { filterMdxFiles } from '@utilities/filterMdxFiles';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { Title } from '@components/generic';
import { Card } from '@components/projects';

interface OngoingProjectsProps {
  data: OngoingProjectsMdxQuery;
}

export default function OngoingProjects({ data }: OngoingProjectsProps) {
  const foundFiles = data.allFile.edges;
  const allMdx = data.allMdx.edges;

  const ongoingProjects = filterMdxFiles(foundFiles, allMdx);

  const { pathname } = useLocation();

  return (
    <Layout>
      <SEO
        title={'Ongoing Projects'}
        description={'See our list of ongoing projects here.'}
      />

      <div className={'space-y-8'}>
        <div>
          <Title>Ongoing Projects</Title>
          <p className={'mt-2'}>
            Healthy Cities Lab is being supported by various funding bodies. [I
            need more text]
          </p>
        </div>

        <div className={'space-y-8'}>
          {ongoingProjects.map(({ name, node: { frontmatter } }, index) => (
            <div key={index}>
              <Card {...frontmatter} pageLink={`${pathname}/${name}`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query OngoingProjectsMdx {
    allFile(
      filter: {
        sourceInstanceName: { eq: "ongoing-projects" }
        extension: { eq: "mdx" }
      }
    ) {
      edges {
        node {
          name
          absolutePath
        }
      }
    }
    # sort mdx files by project start ascending
    allMdx(sort: { fields: frontmatter___projectStart, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            fundingBody
            fundingAmount
            investigators
            projectStart
            projectEnd
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
