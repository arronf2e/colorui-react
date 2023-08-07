import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'colorui-react',
    hd: {},
    deviceWidth: 375,
    nav: [{ title: '组件', link: '/components/alert' }],
  },
});
