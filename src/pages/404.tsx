import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '@components/layout';
import { AppHeadline } from '@components/generic';

export default function Page404() {
  return (
    <>
      <SEO title={'404 Page Not Found'} />
      <div
        className={
          'w-screen h-screen bg-white text-jet-black flex flex-col items-center justify-center p-4'
        }
      >
        <AppHeadline />
        <h3 className={'mt-6'}>404 Page Not Found</h3>
        <button className={'button button-emerald-green p-0 mt-4'}>
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'inline-block',
              padding: '1rem',
            }}
            replace
          >
            Back to Home page
          </Link>
        </button>
      </div>
    </>
  );
}
