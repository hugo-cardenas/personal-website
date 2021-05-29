module.exports = {
  siteMetadata: {
    title: "Hugo Cárdenas | Software developer",
    description: "Software developer",
    siteUrl: "https://hugocardenas.me",
    image: "/images/avatar.png",
    twitterUsername: "@_hugocardenas",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-styled-components",
  ],
};
