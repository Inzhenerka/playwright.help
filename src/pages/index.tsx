import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

type PathCardProps = {
  title: string;
  description: string;
  install: string;
  href: string;
  linkText: string;
};

const PathCard: React.FC<PathCardProps> = ({ title, description, install, href, linkText }) => (
  <div className={clsx("col col--4", styles.pathCard)}>
    <h3>{title}</h3>
    <p>{description}</p>
    <code className={styles.installCode}>{install}</code>
    <div className={styles.pathCardLink}>
      <a href={href}>{linkText}</a>
    </div>
  </div>
);

type FeatureSectionProps = {
  title: string;
  children: React.ReactNode;
  reversed?: boolean;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, children, reversed }) => (
  <section className={clsx(styles.featureSection, reversed && styles.featureSectionAlt)}>
    <div className="container">
      <h2 className={styles.featureSectionTitle}>{title}</h2>
      <div className={styles.featureSectionContent}>
        {children}
      </div>
    </div>
  </section>
);

const paths: PathCardProps[] = [
  {
    title: "Playwright Test",
    description: "Средство запуска тестов с автоматическим ожиданием, проверками, трассировкой и параллельным выполнением в Chromium, Firefox и WebKit.",
    install: "npm init playwright@latest",
    href: "/docs/intro",
    linkText: "Документация по тестированию",
  },
  {
    title: "Playwright CLI",
    description: "Автоматизация браузера для агентов, таких как Claude Code и GitHub Copilot. Подключаемые навыки помогают экономить токены.",
    install: "npm i -g @playwright/cli@latest",
    href: "/agent-cli/introduction",
    linkText: "Документация CLI",
  },
  {
    title: "Playwright MCP",
    description: "Сервер Model Context Protocol, который позволяет ИИ-агентам управлять браузером через структурированные снимки дерева доступности.",
    install: "npx @playwright/mcp@latest",
    href: "/mcp/introduction",
    linkText: "Документация MCP",
  },
];

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Веб-автоматизация для тестов, скриптов и ИИ-агентов"
    >
      {/* Hero */}
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span> помогает автоматизировать работу в браузере для тестов, скриптов и ИИ-агентов.
          </h1>
          <p className={styles.heroSubtitle}>
            Единый API для управления Chromium, Firefox и WebKit из тестов, скриптов и ИИ-агентов.
            Доступен для{' '}
            <a href="/docs/intro">TypeScript</a>,{' '}
            <a href="/python/docs/intro">Python</a>,{' '}
            <a href="/dotnet/docs/intro">.NET</a> и{' '}
            <a href="/java/docs/intro">Java</a>.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.getStarted} to="docs/intro">
              Начать работу
            </Link>
            <Link className={styles.getStarted} to="https://inzhenerka.tech/testing">
              Пройти обучение
            </Link>
          </div>
        </div>
      </header>

      <main>
        <FeatureSection title="О переводе" reversed>
          <p>
            Это русская версия документации Playwright. Помогите сделать перевод точнее и полезнее для сообщества. Если заметили неточность, предложите правку в{' '}
            <a href="https://github.com/Inzhenerka/playwright.help">репозитории</a> или напишите в{' '}
            <a href="https://t.me/inzhenerkatech_sup">поддержку</a>.
          </p>
          <p>
            Чтобы открыть русскую версию страницы, замените <code>playwright.dev</code> в адресе на <code>playwright.help</code>.
          </p>
        </FeatureSection>

        {/* Path cards */}
        <section className={styles.pathCards}>
          <div className="container">
            <div className="row">
              {paths.map((props, idx) => (
                <PathCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* Testing features */}
        <FeatureSection title="Для тестирования" reversed>
          <div className="row">
            <div className="col col--6">
              <h4>Автоматическое ожидание и проверки</h4>
              <p>
                Playwright ждёт, пока элементы станут доступны для взаимодействия. Проверки автоматически повторяются до выполнения условий, поэтому искусственные задержки не нужны.
              </p>
              <h4>Изоляция тестов</h4>
              <p>
                Каждый тест получает отдельный контекст браузера, эквивалентный новому профилю. Состояние аутентификации можно сохранить один раз и использовать в разных тестах.
              </p>
            </div>
            <div className="col col--6">
              <h4>Устойчивые локаторы</h4>
              <p>
                Находите элементы так, как их воспринимает пользователь, с помощью{' '}
                <code>getByRole</code>, <code>getByLabel</code>, <code>getByPlaceholder</code>,{' '}
                <code>getByTestId</code>.
              </p>
              <h4>Параллельный запуск и распределение тестов</h4>
              <p>
                По умолчанию тесты запускаются параллельно во всех настроенных браузерах. Распределяйте тесты по нескольким машинам, чтобы ускорить проверку каждого коммита в CI.
              </p>
            </div>
          </div>
        </FeatureSection>

        {/* Agent features */}
        <FeatureSection title="Для ИИ-агентов">
          <div className="row">
            <div className="col col--6">
              <h4>Снимки дерева доступности</h4>
              <p>
                Агенты взаимодействуют со страницей через структурированное дерево доступности, используя роли, имена и идентификаторы элементов. Для этого достаточно текстового снимка.
              </p>
              <h4>Сервер MCP</h4>
              <p>
                Готовый сервер <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer noopener">Model Context Protocol</a> для VS Code, Cursor, Claude Desktop, Windsurf и других клиентов MCP. Браузер управляется через стандартные вызовы инструментов.
              </p>
            </div>
            <div className="col col--6">
              <h4>CLI для агентов разработки</h4>
              <p>
                Интерфейс командной строки с подключаемыми навыками. Помогает Claude Code, GitHub Copilot и другим агентам управлять браузером, сохраняя место в контексте для кода проекта.
              </p>
              <h4>Мониторинг сеансов</h4>
              <p>
                Панель с прямой трансляцией экрана каждого активного сеанса. Выберите сеанс, чтобы увеличить изображение и взять управление.
              </p>
            </div>
          </div>
        </FeatureSection>

        {/* Tooling */}
        <FeatureSection title="Инструменты" reversed>
          <div className="row">
            <div className="col col--4">
              <h4><a href="docs/codegen">Генератор тестов</a></h4>
              <p>
                Записывайте действия в браузере, чтобы Playwright сгенерировал код теста. Добавляйте проверки с панели записи и выбирайте локаторы, нажимая на элементы.
              </p>
            </div>
            <div className="col col--4">
              <h4><a href="docs/trace-viewer-intro">Просмотр трассировки</a></h4>
              <p>
                Хронология выполнения теста со снимками DOM, сетевыми запросами, сообщениями консоли и скриншотами. Помогает разбирать сбои без повторного запуска.
              </p>
            </div>
            <div className="col col--4">
              <h4><a href="/docs/getting-started-vscode">Расширение для VS Code</a></h4>
              <p>
                Запускайте, отлаживайте и генерируйте тесты прямо в редакторе. Ставьте точки останова, проверяйте локаторы в браузере и открывайте трассировку на боковой панели.
              </p>
            </div>
          </div>
        </FeatureSection>

        {/* Cross-browser */}
        <section className={styles.crossBrowser}>
          <div className="container" style={{ textAlign: 'center' }}>
            <img src="img/logos/Browsers.png" width="30%" alt="Chromium, Firefox, WebKit" />
            <p className={styles.crossBrowserText}>
              <b>Разные браузеры и платформы.</b> Chromium, Firefox и WebKit работают на Linux, macOS и Windows, с графическим интерфейсом и без него. Playwright также доступен для{' '}
              <a href="/python/docs/intro">Python</a>,{' '}
              <a href="/dotnet/docs/intro">.NET</a> и{' '}
              <a href="/java/docs/intro">Java</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
