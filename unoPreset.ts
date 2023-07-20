import { Preset } from 'unocss';

export const unoPreset: Preset = {
  name: 'uno-preset',
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
  ],
  theme: {},
};
