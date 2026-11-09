const path = require('node:path');

module.exports = async function yandexMetrica(context, options) {
  const pluginPath = require.resolve('docusaurus-plugin-yandex-metrica');
  const {default: createPlugin} = await import(pluginPath);
  const plugin = await createPlugin(context, options);

  return {
    ...plugin,
    getClientModules() {
      return plugin.getClientModules().map((file) =>
        require.resolve(path.resolve(path.dirname(pluginPath), file)),
      );
    },
    injectHtmlTags() {
      const {headTags = [], postBodyTags = [], ...tags} = plugin.injectHtmlTags();
      return {
        ...tags,
        headTags: headTags.filter((tag) => tag.tagName !== 'noscript'),
        postBodyTags: [...postBodyTags, ...headTags.filter((tag) => tag.tagName === 'noscript')],
      };
    },
  };
};
