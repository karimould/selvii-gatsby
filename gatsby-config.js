module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: frame-ancestors 'self' http://*.selvii.de/",
            "X-Frame-Options: ALLOW-FROM http://selvii.de/",
          ]
        },
        mergeSecurityHeaders: false,
      }
    },
    // // {
    // //         resolve: 'gatsby-plugin-snipcart',
    // //         options: {
    // //           apiKey: 'ZTc4NTUzYmEtYzViMS00ZjViLWE2OTUtYzliOGQzMGYzNDIxNjM2NzI0MzA2OTY1ODUzMTY5'
    // //         }
    // //       },   
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127059928-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://www.selvii.de',
          sitemap: 'https://www.selvii.de/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
  },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // {
    //   resolve: ` gatsby-plugin-netlify-headers`,
    //   options: {
    //     headers: {
    //       "/*": [
    //         "Access-Control-Allow-Origin: *",
    //         ""
    //       ],
    //     },                                  // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [],                           // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true,                   // boolean to turn off the default security headers
    //     mergeLinkHeaders: false,                      // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
    //     mergeCachingHeaders: true,                    // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //   }
    // },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
