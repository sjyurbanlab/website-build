module.exports = {
  siteMetadata: {
    title: `Healthy Cities Lab . Prof. Jiyun Song`,
    titleTemplate: '%s . Healthy Cities Lab',
    description: 'HKU Faculty of Engineering Healthy Cities Laboratory Website',
    keywords: 'hku, engineering, healthy cities, research',
    url: 'https://sjyurbanlab.github.io',
    image: '/images/house.jpg',
    icon: '/images/house.ico'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          'research-themes': require.resolve('./src/Layout.tsx'),
          'ongoing-projects': require.resolve('./src/Layout.tsx'),
          'past-projects': require.resolve('./src/Layout.tsx'),
          fun: require.resolve('./src/Layout.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'research-themes',
        path: `${__dirname}/src/pages/research-themes/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'ongoing-projects',
        path: `${__dirname}/src/pages/projects/ongoing-projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'past-projects',
        path: `${__dirname}/src/pages/projects/past-projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'generic-components',
        path: `${__dirname}/src/components/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'fun',
        path: `${__dirname}/src/pages/team-activities/fun.mdx`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@utilities': 'src/utilities',
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
};
