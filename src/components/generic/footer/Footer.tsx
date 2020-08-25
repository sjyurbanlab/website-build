import React, { FC, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import { LoadingContext } from '@utilities/LoadingContext';

import { PageContainer } from '@components/layout';
import { colorfulGreenBackgroundImage } from '@assets/images';

export const Footer: FC = () => {
  const {isLoading} = useContext(LoadingContext);

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
    if (!isLoading)
      fetchLastCommit().then();
  }, [isLoading]);

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
          <div className={'lg:flex lg:justify-between'}>
            {/* lab mission */}
            <div>
              <h4>Our Mission</h4>
              <p>
                Insert lab mission here Insert lab mission here Insert lab
                mission here Insert lab mission here Insert lab mission here
                Insert lab mission here Insert lab mission here Insert lab
                mission here Insert lab mission here Insert lab mission here
                Insert lab mission here
              </p>
            </div>

            {/* contact us and site last updated */}
            <div className={'mt-4 lg:mt-0 lg:ml-4 lg:text-right lg:flex-none space-y-2'}>
              <div>
                <h4>Contact us</h4>
                <p>
                  <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
                </p>
                <p>
                  <Link href={'https://goo.gl/maps/ZBQijMcThx2nE5r2A'}>
                    The University of Hong Kong Haking Wong Building LG
                  </Link>
                </p>
              </div>
              {lastUpdated && (
                <p className={'text-sm'}>{`This site was last updated on ${moment(
                  lastUpdated.date
                ).calendar()} by ${lastUpdated.authorName}.`}</p>
              )}
            </div>
          </div>

          <div className={'mt-4 md:mt-8 space-y-2 text-sm'}>
            <p>
              This website is powered by{' '}
              <Link href={'https://gatsbyjs.org'}>Gatsby</Link> and{' '}
              <Link href={'https://reactjs.org'}>React</Link>, styled with{' '}
              <Link href={'https://tailwindcss.com'}>TailwindCSS</Link>, hosted
              using <Link href={'https://pages.github.com/'}>Github Pages</Link>
              , and managed at{' '}
              <Link
                href={'https://github.com/sjyurbanlab/sjyurbanlab.github.io'}
              >
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
