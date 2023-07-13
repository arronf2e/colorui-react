import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'colorui-react',
    hd: { rules: [] },
    deviceWidth: 375,
    nav: [
      { title: '组件', link: '/components/alert' }
    ]
  },
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
});
