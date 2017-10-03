module.exports = {
  siteMetadata: {
    title: `Intro to React workshop by Swizec`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
            {
                resolve: `gatsby-plugin-typography`,
                options: {
                    pathToConfigModule: `src/utils/typography.js`
                }
            },
            `gatsby-plugin-styled-components`
  ]
}
