  // @ts-check
  // `@type` JSDoc annotations allow editor autocompletion and type checking
  // (when paired with `@ts-check`).
  // There are various equivalent ways to declare your Docusaurus config.
  // See: https://docusaurus.io/docs/api/docusaurus-config

  import { themes as prismThemes } from 'prism-react-renderer';

  // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'StableCraft LLC', // Updated title
    tagline: 'Payment solutions for stablecoins', // Updated tagline
    favicon: 'img/favicon.ico',
    url: 'https://stablecraft.io', // Update this to your actual domain
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'johnpottergr', // Updated to your GitHub username
    projectName: 'stablecraft.io', // Updated to your repo name
    deploymentBranch: 'gh-pages',
    trailingSlash: false, // Recommended for GitHub Pages

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
            routeBasePath: 'kb', // instead of
            sidebarPath: require.resolve('./sidebars.js'),
            // Update this to your repo
            path: 'docs', // Ensure this points to the correct directory
            editUrl: 'https://github.com/johnpottergr/stablecraft.io/edit/main/',

          },
          blog: {
            showReadingTime: true,
            routeBasePath: 'blog', // this makes your blog accessible at /blog
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Update this to your repo
            editUrl: 'https://github.com/johnpottergr/stablecraft.io',
            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          },
          theme: {
            customCss:  [require.resolve('./src/css/custom.css')],
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true, // Enable the toggle
          respectPrefersColorScheme: false, // Optional: sync with user's system theme
        },
        // Replace with your project's social card
        // Remove logo entirely:
        // logo: {
        //   alt: 'StableCraft Logo',
        // }

        navbar: {
          title: 'Stablecraft',
          logo: {
            alt: 'Stablecraft Logo',
            src: 'img/green.png', // path relative to the `static` folder
            height: '90px',
          },
          items: [
            { to: '/', label: 'Welcome', position: 'left' }, // Moved to first position
            { to: '/stablecoin-payment-services', label: 'Payment Services', position: 'left' }, // Moved to second position
            { to: '/kb/intro/what-is-a-stablecoin', label: 'Knowledge Base', position: 'left', },
            { href: '/stablecoin-liquidity-tracker', label: 'Liquidity Tracker', position: 'left' },
            { href: '/stablecoin-stress-test', label: 'Stress Test', position: 'left'},
            { href: '/risk-manager', label: 'Risk Manager', position: 'left'},
            { to: '/blog', label: 'Updates & Blog', position: 'left' },
            { href: 'https://docs.stablecraft.io', label: 'Docs', position: 'right' }, // Link to docs subdomain

          ],
        },

        footer: {
          style: 'dark',
          links: [
            {
              title: 'Pages',
              items: [
                {
                  label: 'Welcome',
                  to: '/',
                },

                {
                  label: 'Services',
                  to: '/stablecoin-payment-services',
                },
                {
                  label: 'Blog',
                  to: '/blog',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {

                  label: 'X',
                  href: 'https://x.com/johnpottergr', // Update this to your X handle
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'Stress Test',
                  href: 'https://github.com/johnpottergr', // Update this to your GitHub URL
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} John Potter. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
  };

  export default config;
