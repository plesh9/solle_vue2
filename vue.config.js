const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/solle_vue2/' : '',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'app/i18n/messages',
      enableInSFC: true,
      enableBridge: true,
      includeLocales: false,
    },
  },
});
