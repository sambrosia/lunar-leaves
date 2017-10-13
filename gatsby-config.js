module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // 'gatsby-plugin-preact', // FIXME: Breaking HMR for some reason
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        precision: 8
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
}
