import { defineConfig } from 'unocss';

export default defineConfig({
  rules: [
    // eslint-disable-next-line
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
});
