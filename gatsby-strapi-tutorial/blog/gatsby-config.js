module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://howto-stackaz.herokuapp.com`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`,
          `user`
        ]
      },
    },
  ],
}
