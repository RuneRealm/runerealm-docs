import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import { RUNEREALM } from '@arcaogaming/project-links';

const config: Config = {
  title: 'RuneRealm',
  tagline: '#1 Onchain MMORPG',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://runerealm-docs_game.ar.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RuneRealm', // Usually your GitHub org/user name.
  projectName: 'runerealm-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Point to RuneRealm repository
          editUrl:
            'https://github.com/RuneRealm/runerealm-docs',
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: true,
          blogTitle: 'News',
          blogDescription: 'RuneRealm News and Updates',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl:
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'RuneRealm',
      logo: {
        alt: 'RuneRealm Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/media-kit', label: 'Media Kit', position: 'left' },
        {
          href: RUNEREALM.github,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: RUNEREALM.discord,
            },
            {
              label: 'Telegram',
              href: RUNEREALM.telegram,
            },
            {
              label: 'X',
              href: RUNEREALM.twitter,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: RUNEREALM.website,
            },
            {
              label: 'GitHub',
              href: RUNEREALM.github,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RuneRealm. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    require.resolve('docusaurus-lunr-search')
    // require.resolve('docusaurus-lunr-search'), //searchbar
    //   [ // Google Analytics
    //     '@docusaurus/plugin-google-gtag',
    //     {
    //       trackingID: 'YOUR GOOGLE ANALYTICS TAG HERE',
    //       anonymizeIP: true, // Non-Optional: anonymize IP addresses
    //     },
    //   ],
  ]
};

export default config;
