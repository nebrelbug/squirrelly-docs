/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Ben Gubler',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/squirrelly-website/img/nebrelbug.png',
    infoLink: 'https://github.com/nebrelbug',
    pinned: true,
  },
];

const siteConfig = {
  title: 'SquirrellyJS' /* title for your website */,
  tagline: 'A new, modern, and blazing fast Template Engine',
  url: 'https://nebrelbug.github.io' /* your website url */,
  baseUrl: '/squirrelly-website/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  cleanUrl: true,

  // Used for publishing and more
  projectName: 'squirrelly-website',
  organizationName: 'nebrelbug',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {page: 'demo', label: 'Demo' },
    {page: 'performance', label: 'Performance'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/Squirrelly1.png',
  footerIcon: 'img/Squirrelly1.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#ca5010',
    secondaryColor: 'rgb(0,0,0)',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Squirrelly',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://rawgit.com/nebrelbug/squirrelly/master/index.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/Squirrelly1.png',
  twitterImage: 'img/Squirrelly1.png',
  cname: 'squirrelly.js.org'

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
