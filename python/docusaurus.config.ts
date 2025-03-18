import prismLight from './src/config/prismLight'
import prismDark from './src/config/prismDark'

import type {Config} from '@docusaurus/types';
import path from "path";
const isProd = process.env.NODE_ENV === "production";

const hasStableVersion = require(path.join(__dirname, 'python/versions.json')).includes('stable');

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

export default {
  title: "Playwright Python",
  tagline: "Быстрое и надежное сквозное тестирование современных веб-приложений",
  // Repo config for GitHub Pages
  url: "https://playwright.help",
  baseUrl: "/python/",
  organizationName: "Inzhenerka",
  projectName: "playwright.help",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  scripts: ["/python/js/redirection.js"],
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
      additionalLanguages: ['python', 'bash', 'batch', 'powershell'],
    },
    navbar: {
      title: "Playwright для Python",
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
          href: "https://github.com/microsoft/playwright-python",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: 'Python',
          position: 'left',
          items: [
            {
              label: 'Python',
              'data-language-prefix': '/python/',
              href: '#',
            },
            {
              label: 'Node.js',
              'data-language-prefix': '/',
              href: '#',
            },
            {
              label: 'Java',
              'data-language-prefix': '/java/',
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
              href: "https://github.com/microsoft/playwright-python",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} ООО "ИНЖЕНЕРКАТЕХ". На основе материалов Microsoft`,
    },
    algolia: {
      indexName: 'playwright-python',
      appId: 'K09ICMCV6X',
      apiKey: 'a5b64422711c37ab6a0ce4d86d16cdd9',
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
    repositoryName: "playwright-python",
  },
  trailingSlash: false,
  future: {
    experimental_faster: true,
  },
} satisfies Config;
