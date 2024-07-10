import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import { PageContainer } from '@components/layout';
import { Link as GenericLink } from '../app';

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

  const contactEmail = `jiyun.song@whu.edu.cn`;

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
              <Link href={'https://www.google.com/maps/place/%E6%B0%B4%E8%B5%84%E6%BA%90%E4%B8%8E%E6%B0%B4%E7%94%B5%E5%B7%A5%E7%A8%8B%E7%A7%91%E5%AD%A6%E5%9B%BD%E5%AE%B6%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%B0%B4%E7%94%B5%E7%AB%99%E8%BF%87%E6%B8%A1%E8%BF%87%E7%A8%8B%E4%B8%8E%E6%8E%A7%E5%88%B6%E5%AE%9E%E9%AA%8C%E5%A4%A7%E5%8E%85/@30.5420492,114.362198,18z/data=!4m14!1m7!3m6!1s0x342ea5126cd5fd9f:0xe2b79fd385a4589e!2z5rC06LWE5rqQ5LiO5rC055S15bel56iL56eR5a2m5Zu95a626YeN54K55a6e6aqM5a6k5rC055S156uZ6L-H5rih6L-H56iL5LiO5o6n5Yi25a6e6aqM5aSn5Y6F!8m2!3d30.542167!4d114.363464!16s%2Fg%2F1vbl574s!3m5!1s0x342ea5126cd5fd9f:0xe2b79fd385a4589e!8m2!3d30.542167!4d114.363464!16s%2Fg%2F1vbl574s?entry=ttu'}>
                Wuhan University State Key Laboratory of Water Resources Engineering and Management
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
  <GenericLink
    href={href}
    className={'text-gray-100 underline hover:text-gray-300'}
  >
    {children}
  </GenericLink>
);
