import { defineConfig } from 'dumi';
const UnoCSS = require('@unocss/webpack').default;

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'colorui-react',
    nav: [{ title: '组件', link: '/components/alert' }],
  },
  chainWebpack: (config) => {
    config.plugin('unocss').use(UnoCSS());
    config.optimization.merge({
      realContentHash: true,
    });
  },
});
