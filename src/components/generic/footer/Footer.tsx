import React, { FC } from 'react';

import { PageContainer } from '@components/layout';
import { colorfulGreenBackgroundImage } from '@assets/images';

export const Footer: FC = () => {
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

            {/* contact us */}
            <div className={'mt-4 lg:mt-0 lg:ml-4 lg:text-right lg:flex-none'}>
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
