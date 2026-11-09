module.exports = {
  mcp: [
    'introduction',
    {
      type: 'category',
      label: 'Начало работы',
      items: [
        'installation',
        {
          type: 'category',
          label: 'Настройка клиентов',
          items: [
            'clients/vscode',
            'clients/cursor',
            'clients/claude-code',
            'clients/claude-desktop',
            'clients/windsurf',
            'clients/other-clients',
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Основные понятия',
      items: [
        'snapshots',
        'capabilities',
        'vision-mode',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Автоматизация браузера',
      items: [
        'tools/navigation',
        'tools/interaction',
        'tools/forms',
        'tools/keyboard-mouse',
        'tools/tabs',
        'tools/dialogs',
        'tools/file-upload',
        'tools/waiting',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Сеть и хранилище',
      items: [
        'tools/network-mocking',
        'tools/storage',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Инструменты разработчика',
      items: [
        'tools/console',
        'tools/screenshots',
        'tools/code-execution',
        'tools/tracing',
        'tools/devtools',
        'tools/assertions',
        'tools/pdf',
      ],
      collapsed: false,
    },
    'tools/video',
    {
      type: 'category',
      label: 'Сеансы',
      items: [
        'configuration/user-profile',
        'configuration/browser-extension',
      ],
      collapsed: false,
    },
    'configuration/options',
  ],
};
