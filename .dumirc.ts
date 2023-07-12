import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'colorui-react',
    hd: { rules: [] },
    deviceWidth: 375,
    nav: [
      { title: '组件', link: '/components' }
    ]
  },
});
