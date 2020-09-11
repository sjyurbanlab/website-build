import React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { PastProjectsMdxQuery } from '../../../../graphql-types';
import { filterMdxFiles } from '@utilities/filterMdxFiles';

import Layout from '@src/Layout';
import { SEO } from '@components/layout';
import { Title } from '@components/generic';
import { Projects } from '@components/projects';

interface PastProjectsProps {
  data: PastProjectsMdxQuery;
}

export default function PastProjects({ data }: PastProjectsProps) {
  const foundFiles = data.allFile.edges;
  const allMdx = data.allMdx.edges;

  const pastProjects = filterMdxFiles(foundFiles, allMdx);

  // obtain pathname
  let { pathname } = useLocation();
  if (pathname[pathname.length - 1] === '/') pathname = pathname.slice(0, -1);

  return (
    <Layout>
      <SEO
        title={'Past Projects'}
        description={'See our list of past projects here.'}
      />

      <div className={'space-y-8'}>
        <Title>Past Projects</Title>

        <Projects projects={pastProjects} pathname={pathname} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PastProjectsMdx {
    allFile(
      filter: {
        sourceInstanceName: { eq: "past-projects" }
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
    allMdx(sort: { fields: frontmatter___projectStart, order: DESC }) {
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
