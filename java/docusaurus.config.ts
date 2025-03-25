import prismLight from './src/config/prismLight'
import prismDark from './src/config/prismDark'
import type {Config} from '@docusaurus/types';
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const hasStableVersion = require(path.join(__dirname, 'java/versions.json')).includes('stable');

let plugins = [
  [
    require.resolve("@docusaurus/plugin-content-docs"),
    {
      sidebarPath: require.resolve("./sidebars.js"),
      // Docusaurus crashes if we don't have a stable version and run docusaurus commands.
      // This is a workaround to make it work since during roll we temporarily remove the stable version.
      ...(hasStableVersion ? {
        versions: {
          stable: {
            badge: false,
          }
        }
      } : {}),
    },
  ],
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: 'community',
      path: 'community',
      routeBasePath: 'community',
      sidebarPath: require.resolve('./sidebarCommunity.js'),
    }),
  ],
  require.resolve("@docusaurus/plugin-content-pages"),
  ['docusaurus-plugin-yandex-metrica', {
    counterID: '100339848',
  }]
];

if (isProd) {
  plugins.push(require.resolve("@docusaurus/plugin-sitemap"));
}

module.exports = {
  title: "Playwright Java",
  tagline: "Быстрое и надежное сквозное тестирование современных веб-приложений",
  // Repo config for GitHub Pages
  url: "https://playwright.help",
  baseUrl: "/java/",
  organizationName: "Inzhenerka",
  projectName: "playwright.help",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  scripts: ["/java/js/redirection.js"],
  favicon: "img/playwright-logo.svg",
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
    localeConfigs: {
      ru: {
        htmlLang: "ru-RU",
      },
    },
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismLight,
      darkTheme: prismDark,
      additionalLanguages: ['java', 'bash', 'batch', 'powershell'],
    },
    navbar: {
      title: "Playwright для Java",
      logo: {
        alt: "Playwright logo",
        src: "img/playwright-inzhenerka.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Документация",
          position: "left",
        },
        {
          type: "doc",
          docId: "api/class-playwright",
          label: "API",
          position: "left",
        },
        {
          href: "https://github.com/microsoft/playwright-java",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: 'Java',
          position: 'left',
          items: [
            {
              label: 'Java',
              'data-language-prefix': '/java/',
              href: '#',
            },
            {
              label: 'Node.js',
              'data-language-prefix': '/',
              href: '#',
            },
            {
              label: 'Python',
              'data-language-prefix': '/python/',
              href: '#',
            },
            {
              label: '.NET',
              'data-language-prefix': '/dotnet/',
              href: '#',
            },
          ],
        },
        {
          to: '/community/welcome',
          label: 'Сообщество',
          position: 'left',
          activeBaseRegex: `/community/`,
        },

        {
          label: 'Обучение',
          position: 'left',
          href: "https://inzhenerka.tech/testing",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Обучение",
          items: [
            {
              label: "Начало работы",
              to: "docs/intro",
            },
            {
              label: "Тренажер по Playwright ⭐",
              href: "https://inzhenerka.tech/playwright",
            },
            {
              label: "Видео по тестированию",
              to: "/community/inzhenerka-videos",
            },
          ],
        },
        {
          title: "Сообщество",
          items: [
            {
              label: "Блог",
              href: "https://inzhenerka.tech/blog",
            },
          ],
        },
        {
          title: "Другое",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/playlist?list=PLNC5acZON2ZCls51Qb-TOGqSvfzJnsazr",
            },
            {
              label: "RuTube",
              href: "https://rutube.ru/plst/891241",
            },
            {
              label: "GitHub",
              href: "https://github.com/microsoft/playwright-java",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} ООО "ИНЖЕНЕРКАТЕХ". На основе материалов Microsoft`,
    },
    algolia: {
      indexName: 'playwright-java',
      appId: 'CULHF9H6SY',
      apiKey: 'a80ce53f4162ad05607078eb2930b18f',
    },
    image: '/img/playwright-cover.jpg',
  },
  themes: [
    [
      require.resolve("@docusaurus/theme-classic"),
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    '@docusaurus/theme-search-algolia',
  ],
  plugins,
  customFields: {
    repositoryName: "playwright-java",
  },
  trailingSlash: false,
  future: {
    experimental_faster: true,
  },
} satisfies Config;
