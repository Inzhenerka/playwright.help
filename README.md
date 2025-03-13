# playwright.help

Полная документация Playwright, переведенная на русский язык.

Сайт создан с помощью [Docusaurus](https://docusaurus.io/). Контент частично берётся из репозитория microsoft/playwright.

## Разработка

### Настройка репозитория

```sh
npm install
```

### Запуск сервера разработки

```sh
npm run start-nodejs
```

См. `package.json` для других языков (Java, Python, .NET).

### Сборка продакшен-версии и запуск сервера

```sh
npm run build
npm run serve
```

### Запуск на Windows

Чтобы обновить документацию в PowerShell, убедитесь, что переменная окружения задана корректно, например:

```powershell
$env:SRC_DIR="C:\Users\user\src\playwright"; npm run roll
```

### Запуск сквозных (end-to-end) тестов

#### Локальный запуск

В одном терминале запустите:

```sh
npm run start-nodejs
```

В другом терминале запустите (будет использоваться локальный сервер docusaurus):

```sh
npx playwright test nodejs
```

#### Запуск в другом окружении

Вы можете задать переменную окружения `BASE_URL=https://playwright.help`, иначе по умолчанию используется `http://localhost:3000`.

### Публикация изменений документации после релиза

#### Cherry-picking (выборочное применение изменений)

1. Перейдите в [Cherry-picking GitHub Actions workflow](https://github.com/microsoft/playwright/actions/workflows/cherry_pick_into_release_branch.yml)
2. Запустите его, указав номер версии (например, `1.25`) и список SHA-хешей коммитов через запятую (из основной ветки).
3. Дождитесь [создания PR](https://github.com/microsoft/playwright/pulls), проведите ревью и выполните слияние.

#### Обновление стабильной документации

1. Перейдите в [Release GitHub Actions workflow](https://github.com/microsoft/playwright.dev/actions/workflows/roll-stable.yml)
2. Запустите его и дождитесь [создания PR](https://github.com/microsoft/playwright.dev/pulls). Этот PR перенесёт изменения из релизной ветки репозитория playwright.
3. Проведите ревью и выполните слияние PR.
