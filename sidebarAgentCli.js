module.exports = {
  agentCli: [
    'introduction',
    {
      type: 'category',
      label: 'Начало работы',
      items: [
        'installation',
        'quick-start',
        'skills',
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
        'commands/navigation',
        'commands/interaction',
        'commands/keyboard-mouse',
        'commands/tabs',
        'commands/dialogs',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Сеть и хранилище',
      items: [
        'commands/network-routing',
        'commands/storage',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Инструменты разработчика',
      items: [
        'commands/console-eval',
        'commands/screenshots-pdf',
        'commands/codegen',
        'commands/tracing',
        'commands/test-debugging',
      ],
      collapsed: false,
    },
    'commands/video-recording',
    {
      type: 'category',
      label: 'Сеансы',
      items: [
        'sessions',
        'commands/attach',
      ],
      collapsed: false,
    },
    'configuration',
  ],
};
