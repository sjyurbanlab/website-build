import React from 'react';

import { Layout } from '@src/Layout';
import { AppHeadline } from '@components/generic';
import {
  ImageCarousel,
  News,
  AdditionalLinks,
  Introduction,
} from '@components/home';
import { house } from '@assets/images';

export default function Index() {
  return (
    <Layout
      image={
        'https://sjyurbanlab.github.io/website-assets/home/greenery-with-buildings.jpg'
      }
    >
      <div className={'space-y-4 md:space-y-8'}>
        <div>
          <AppHeadline />
        </div>

        <div className={'space-y-6'}>
          <Introduction />

          <ImageCarousel />

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            {/* news */}
            <News />

            {/* publications */}
            <AdditionalLinks />
          </div>
        </div>

        {/* house icon credits */}
        <div className={'w-fit-content mx-auto flex items-center'}>
          <img src={house} alt={'house'} className={'h-4 w-auto'} />
          <p className={'ml-2 text-center text-xs text-jet-black-light'}>
            made by{' '}
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              www.flaticon.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
