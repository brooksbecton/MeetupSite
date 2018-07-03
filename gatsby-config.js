module.exports = {
  pathPrefix: "/MeetupSite",
  siteMetadata: {
    author: "Brooks Becton",
    title: `Starkville Programming Meetup`
  },
  plugins: [
    "gatsby-plugin-react-next",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp"
  ]
};
