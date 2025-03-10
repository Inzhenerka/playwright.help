import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GitHubStarButton from '../components/GitHubStarButton';
import styles from "./styles.module.css";

const features = [
  {
    title: "Любой браузер \u2022 Любая платформа \u2022 Один API",
    description: <>
      <p>
        <b>Кросс-браузерный.</b> Playwright поддерживает все современные рендеринг-движки, включая Chromium, WebKit и Firefox.
      </p>
      <p>
        <b>Кросс-платформенный.</b> Тестирование на Windows, Linux и macOS, локально или в CI, в безголовом или обычном режиме.
      </p>
      <p>
        <b>На разных языках программирования.</b> Используйте API Playwright на <a
        href="https://playwright.dev/docs/intro">TypeScript</a>, <a
        href="https://playwright.dev/docs/intro">JavaScript</a>, <a
        href="https://playwright.dev/python/docs/intro">Python</a>, <a
        href="https://playwright.dev/dotnet/docs/intro">.NET</a>, <a
        href="https://playwright.dev/java/docs/intro">Java</a>.
      </p>
      <p>
        <b>Тестирование мобильного веба.</b> Нативная мобильная эмуляция Google Chrome для Android и Mobile Safari. Тот же рендеринг-движок работает как на вашем компьютере, так и в облаке.
      </p>
    </>,
  },
  {
  },
  {
  },
  {
    title: "Надёжность \u2022 Без нестабильных тестов",
    description: (
      <>
        <p>
          <b>Автоматическое ожидание.</b> Playwright ожидает, пока элементы станут доступны для взаимодействия перед выполнением
          действий. Он также имеет богатый набор событий для отслеживания. Комбинация этих двух
          функций устраняет необходимость в искусственных задержках — основной причине нестабильных тестов.
        </p>
        <p>
          <b>Веб-ориентированные проверки.</b> Проверки Playwright созданы специально для
          динамического веба. Проверки автоматически повторяются, пока необходимые условия не будут выполнены.
        </p>
        <p>
          <b>Трассировка.</b> Настраивайте стратегию повторных попыток тестов, записывайте трассировку выполнения, видео, скриншоты
          для устранения нестабильности.
        </p>
      </>
    ),
  },
  {
    title: "Никаких компромиссов \u2022 Никаких ограничений",
    description: (
      <>
        <p>
          Браузеры запускают веб-контент из разных источников в разных процессах.
          Playwright соответствует архитектуре современных браузеров и выполняет тесты в отдельных процессах.
          Это освобождает Playwright от типичных ограничений, присущих запуску тестов в одном процессе.
        </p>
        <p>
          <b>Множество всего.</b> Тестовые сценарии, охватывающие несколько <b>вкладок</b>, несколько <b>источников</b> и несколько <b>пользователей</b>.
          Создавайте сценарии с разными контекстами для разных пользователей и запускайте их на своём сервере, всё в одном тесте.
        </p>
        <p>
          <b>Достоверные события.</b> Наведение на элементы, взаимодействие с динамическими элементами управления, генерация достоверных событий.
          Playwright использует реальный конвейер ввода браузера, неотличимый от действий реального пользователя.
        </p>
        <p>
          <b>Тестирование фреймов, проникновение в Shadow DOM.</b> Селекторы Playwright проникают в Shadow DOM и
          позволяют беспрепятственно переходить между фреймами.
        </p>
      </>
    ),
  },
  {
  },
  {
  },
  {
    title: "Полная изоляция \u2022 Быстрое выполнение",
    description: (
      <>
        <p>
          <b>Контексты браузера.</b> Playwright создаёт контекст браузера для каждого теста. Контекст
          браузера эквивалентен новому профилю браузера. Это обеспечивает полную изоляцию тестов
          без дополнительных накладных расходов. Создание нового контекста браузера занимает всего несколько миллисекунд.
        </p>
        <p>
          <b>Вход один раз.</b> Сохраняйте состояние аутентификации контекста и повторно используйте его во всех тестах.
          Это позволяет избежать повторных операций входа в каждом тесте, но при этом обеспечивает полную изоляцию независимых тестов.
        </p>
      </>
    ),
  },
  {
    title: "Мощные инструменты",
    description: (
      <>
        <p>
          <b><a href="docs/codegen">Генерация кода.</a></b> Генерируйте тесты, записывая свои действия. Сохраняйте их на любом языке.
        </p>
        <p>
          <b><a href="docs/debug#playwright-inspector">Инспектор Playwright.</a></b> Исследуйте страницу, генерируйте селекторы, выполняйте тест пошагово, просматривайте точки кликов, изучайте логи выполнения.
        </p>
        <p>
          <b><a href="docs/trace-viewer-intro">Просмотр трассировки.</a></b> Собирайте всю информацию для расследования сбоев тестов. Трассировка Playwright
          содержит скринкаст выполнения теста, интерактивные снимки DOM, проводник по действиям, исходный код теста и многое другое.
        </p>
      </>
    ),
  },
];

type FeatureProps = {
  imageUrl?: string
  title?: string
  description?: React.ReactElement
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)} style={{ marginTop: 40 }}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

type FeatureRowProps = {
  title: string
  description: string
  videoUrl: string
  isImageLeft: boolean
}

const FeatureRow: React.FC<FeatureRowProps> = ({ title, description, videoUrl, isImageLeft }) => {
  const textColumn = (
    <div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const imageColumn = (
    <div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
  return (
    <section
      className={clsx(!isImageLeft ? styles.featureContainerAlt : undefined)}
    >
      <div className={"container"}>
        <div
          className={clsx(
            "row",
            styles.featureRow,
            !isImageLeft ? styles.featureRowAlt : undefined
          )}
        >
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>
  );
}

const logos = [
  { imageUrl: "img/logos/VSCode.png", href: "https://code.visualstudio.com", alt: "VS Code" },
  { imageUrl: "img/logos/Bing.png", href: "https://bing.com", alt: "Bing" },
  { imageUrl: "img/logos/Outlook.png", href: "https://outlook.com", alt: "Outlook" },
  { imageUrl: "img/logos/DHotstar.jpg", href: "https://www.hotstar.com/", alt: "Disney+ Hotstar" },
  {
    imageUrl: "img/logos/MUI.png",
    href: "https://github.com/mui-org/material-ui",
    alt: "Material UI",
  },
  { imageUrl: "img/logos/ING.png", href: "https://github.com/ing-bank/lion", alt: "ING" },
  {
    imageUrl: "img/logos/Adobe2.png",
    href: "https://github.com/adobe/spectrum-web-components",
    alt: "Adobe",
  },
  {
    imageUrl: "img/logos/ReactNavigation.png",
    href: "https://github.com/react-navigation/react-navigation",
    alt: "React Navigation",
  },
  {
    imageUrl: "img/logos/accessibilityinsights.png",
    href: "https://accessibilityinsights.io/",
    alt: "Accessibility Insights",
  },
];

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Кросс-браузерное сквозное тестирование для современных веб-приложений"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span> обеспечивает
            надёжное сквозное тестирование для современных веб-приложений.
          </h1>
          <div className={styles.buttons}>
            <Link
              className={styles.getStarted}
              to={useBaseUrl("docs/intro")}
            >
              Начать работу
            </Link>
            <GitHubStarButton owner="microsoft" repo={siteConfig.customFields.repositoryName as string}/>
          </div>
        </div>
      </header>
      <br></br>
      <main>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--12", styles.logosColumn)}>
                <h2>Это перевод</h2>
                <p>
                    Сайт является переведенной версией оригинальной документации по Playwright. Мы приглашаем всех желающих вносить правки и улучшения в перевод, чтобы сделать его ещё точнее и полезнее для сообщества.
                    Если вы заметили неточность или хотите помочь улучшить перевод, присылайте правки в <a href="https://github.com/Inzhenerka/playwright.inzhenerka.tech" target="_blank" rel="noreferrer noopener">репозиторий</a> или в <a href="https://t.me/inzhenerkatech_sup" target="_blank" rel="noreferrer noopener">поддержку</a>.
                </p>
                <p>
                    Сайт полностью дублирует оригинальный, поэтому для перевода любой страницы достаточно заменить адрес <b>https://playwright.dev</b> на <b>https://playwright.<span style={{color: '#45ba4b'}}>inzhenerka.tech</span></b>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{textAlign: 'center'}}>
          <img src="img/logos/Browsers.png" width="40%" alt="Браузеры (Chromium, Firefox, WebKit)" />
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}

export default Home;
