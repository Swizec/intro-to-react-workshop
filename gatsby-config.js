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
            `gatsby-plugin-styled-components`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `src`,
                    path: `${__dirname}/src/`
                }
            },
            `gatsby-transformer-remark`
  ]
}
