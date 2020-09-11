import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../../graphql-types';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultKeywords: keywords
        siteUrl: url
        defaultImage: image
        defaultIcon: icon
      }
    }
  }
`;

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  isArticle?: boolean;
}

export const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  isArticle,
}) => {
  const { site }: SeoQuery = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultKeywords,
    siteUrl,
    defaultImage,
    defaultIcon,
  } = site?.siteMetadata || {};

  const { pathname } = useLocation();

  const seo = {
    title: title || defaultTitle || '',
    titleTemplate: title && titleTemplate ? titleTemplate : '%s',
    description: description || defaultDescription || '',
    keywords: keywords || defaultKeywords || '',
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const staticImage = image || defaultImage || '';
  const icon = defaultIcon;

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name={'description'} content={seo.description} />

      <meta name={'keywords'} content={seo.keywords} />

      <meta name={'image'} content={seo.image} />

      <link
        rel={'icon'}
        type={'image/jpg'}
        sizes={'64x64'}
        href={staticImage}
      />

      {icon && <link rel={'shortcut icon'} type={'image/x-icon'} href={icon} />}

      {seo.url && <meta property={'og:url'} content={seo.url} />}

      {isArticle ? <meta property={'og:type'} content={'article'} /> : null}

      {seo.title && <meta property={'og:title'} content={seo.title} />}

      {seo.description && (
        <meta property={'og:description'} content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  );
};
