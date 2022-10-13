// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "fm-webviewer-fetch",
  tagline: "Easy promise-based FileMaker data",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "proofgeist", // Usually your GitHub org/user name.
  projectName: "fm-webviewer-fetch", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/proofgeist/fm-webviewer-fetch/tree/main/demo",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        pages: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "fm-webviewer-fetch",
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/proofgeist/fm-webviewer-fetch",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Proof+Geist",
                href: "https://proofgeist.com",
              },
              {
                label: "JS Dev Kit for FileMaker Developers",
                href: "https://github.com/proofgeist/js-dev-environment",
              },
            ],
          },
          {
            title: "Other Packages",
            items: [
              {
                label: "@proofgeist/fmdapi",
                href: "https://github.com/proofgeist/fmdapi",
              },
              {
                label: "types/filemaker-webviewer",
                href: "https://proofgeist.com",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
