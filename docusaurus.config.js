// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pejman Samadi",
  tagline: 'DevOps / MLOps Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pejmans21.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pejmans21', // Usually your GitHub org/user name.
  projectName: 'pejmans21.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pejmanS21/pejmans21.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pejmanS21/pejmans21.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },  
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Pejman's Portfolio",
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About Me',
          },
          {to: '/blog', label: 'Projects', position: 'left'},
          {
            href: 'https://github.com/pejmans21',
            position: 'right',
            className: "header-icon-link header-github-link",
          },
          {
            href: 'https://linkedin.com/in/pejman-samadi',
            position: 'right',
            className: "header-icon-link header-linkedin-link",
          },
          {
            href: 'https://twitter.com/pejsamadi',
            position: 'right',
            className: "header-icon-link header-twitter-link",
          },
          {
            href: 'mailto:pezhmansamadi21@gmail.com',
            position: 'right',
            className: "header-icon-link header-mail-link",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Me',
            items: [
              {
                label: 'Resume',
                to: '/docs/about',
              },
              {
                label: 'Projects',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Mail',
                href: 'mailto:pezhmansamadi21@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/pejman-samadi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pejsamadi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://github.com/pejmans21',
                label: 'GitHub',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/17302414/pejman-samadi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pejman's Resume, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
