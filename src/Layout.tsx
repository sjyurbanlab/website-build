import React, { FC, useEffect, useRef, useState } from 'react';

import {
  defaultViewport,
  generateViewport,
  Viewport,
  ViewportContext,
} from '@utilities/ViewportContext';
import { useComponentBox } from '@hooks/useComponentBox';

import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@components/mdx';

import { SEO, SEOProps } from '@components/layout';
import { Footer, NavBar } from '@components/generic';
import { PageContainer } from '@components/layout';

export const Layout: FC<SEOProps> = ({ children, ...seoProps }) => {
  const [viewport, setViewport] = useState<Viewport>(defaultViewport);

  useEffect(() => {
    const handleViewportChange = () => setViewport(generateViewport(window));
    window.addEventListener('resize', handleViewportChange);
    return () => window.removeEventListener('resize', handleViewportChange);
  }, []);

  const navBarBoxRef = useRef(null);
  const navBarBox = useComponentBox(navBarBoxRef);

  return (
    <ViewportContext.Provider value={viewport}>
      <MDXProvider components={mdxComponents}>
        <SEO {...seoProps} />

        <div className={'text-sm sm:text-base bg-white text-jet-black'}>
          <div
            ref={navBarBoxRef}
            className={'fixed w-full top-0 left-0 bg-white'}
            style={{ zIndex: 999 }}
          >
            <NavBar />
          </div>

          <div
            key={`box-${navBarBox?.height || 75}`}
            className={'flex flex-col min-h-screen'}
            style={{ marginTop: navBarBox?.height || 75 }}
          >
            <div className={'text-jet-black text-sm md:text-base'}>
              <PageContainer>{children}</PageContainer>
            </div>

            <div className={'mt-auto'}>
              <Footer />
            </div>
          </div>
        </div>
      </MDXProvider>
    </ViewportContext.Provider>
  );
};

export default Layout;
