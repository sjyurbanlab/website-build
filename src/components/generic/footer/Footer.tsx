import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import { PageContainer } from '@components/layout';
import { colorfulGreenBackgroundImage } from '@assets/images';

export const Footer: FC = () => {
  const [lastUpdated, setLastUpdated] = useState<{
    authorName: string;
    date: Date;
  }>();

  useEffect(() => {
    const fetchLastCommit = async () => {
      const baseUrl = `https://api.github.com/repos/sjyurbanlab/website-build/git`;
      const refResponse = await axios.get(
        `${baseUrl}/matching-refs/heads/master`
      );
      const commitSha: string = refResponse.data[0].object.sha;
      const commitResponse = await axios.get(`${baseUrl}/commits/${commitSha}`);
      const { name: authorName, date } = commitResponse.data.author;
      setLastUpdated({ authorName, date: new Date(date) });
    };
    const timer = setTimeout(() => fetchLastCommit().then(), 200);
    return () => clearTimeout(timer);
  }, []);

  const contactEmail = `jsong90@hku.hk`;

  return (
    <div className={'relative text-gray-100 text-sm md:text-base'}>
      <img
        src={colorfulGreenBackgroundImage}
        alt={'green background'}
        className={'absolute inset-0 w-full h-full object-cover'}
      />
      <div className={'relative'}>
        <PageContainer>
          {/* contact us and site last updated */}
          <div className={'space-y-2'}>
            <h4>Contact us</h4>
            <p>
              Email at{' '}
              <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
            </p>
            <p>
              <Link href={'https://goo.gl/maps/ZBQijMcThx2nE5r2A'}>
                The University of Hong Kong Haking Wong Building LG
              </Link>
            </p>
            {lastUpdated && (
              <p className={'text-sm'}>{`This site was last updated by ${
                lastUpdated.authorName
              }, ${moment(lastUpdated.date).calendar()}.`}</p>
            )}
          </div>

          <div className={'mt-4 space-y-2 text-sm'}>
            <p>
              This website is powered by{' '}
              <Link href={'https://gatsbyjs.org'}>Gatsby</Link> and{' '}
              <Link href={'https://reactjs.org'}>React</Link>, styled with{' '}
              <Link href={'https://tailwindcss.com'}>TailwindCSS</Link>, hosted
              using <Link href={'https://pages.github.com/'}>Github Pages</Link>
              , and managed at{' '}
              <Link href={'https://github.com/sjyurbanlab/website-build'}>
                Github
              </Link>
              .
            </p>
            <p>Healthy Cities Laboratory 2020</p>
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

const Link: FC<{ href: string }> = ({ href, children }) => (
  <a
    href={href}
    target={'_blank'}
    rel={'noopenner noreferrer'}
    className={'text-gray-100 underline hover:text-gray-300'}
  >
    {children}
  </a>
);
