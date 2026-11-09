# playwright.help

Полная документация Playwright, переведенная на русский язык.

Сайт создан с помощью [Docusaurus](https://docusaurus.io/). Контент частично берётся из репозитория microsoft/playwright.

## Разработка

### Настройка репозитория

Для локальной сборки нужны Bun 1.4.4 и Node.js 22 или новее. Bun устанавливает зависимости и запускает скрипты, а Docusaurus работает на Node.js.

```sh
bun install --frozen-lockfile
```

### Запуск сервера разработки

Для просмотра страниц из репозитория, включая MCP и Agent CLI:

```sh
bun run prepare-nodejs
bun run start
```

Откройте [MCP](http://localhost:3000/mcp/introduction) или [Agent CLI](http://localhost:3000/agent-cli/introduction).

Для запуска с автоматической генерацией документации из исходников Playwright:

```sh
bun run start-nodejs
```

См. `package.json` для других языков (Java, Python, .NET).

### Сборка продакшен-версии и запуск сервера

```sh
bun run build
bun run serve
```

### Запуск на Windows

Чтобы обновить документацию в PowerShell, убедитесь, что переменная окружения задана корректно, например:

```powershell
$env:SRC_DIR="C:\Users\user\src\playwright"; bun run roll
```

### Запуск сквозных (end-to-end) тестов

#### Локальный запуск

В одном терминале запустите:

```sh
bun run prepare-nodejs
bun run start
```

В другом терминале запустите (будет использоваться локальный сервер docusaurus):

```sh
bun run playwright test nodejs
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
