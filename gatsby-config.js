module.exports = {
  siteMetadata: {
    title: 'Halpern Tech Services',
    description: 'The personal statement for Jonathan Halpern',
    author: 'Jonathan Halpern',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: '#3f51b5',
            },
          },
        },
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images',
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
  ],
}
