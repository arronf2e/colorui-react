import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetRemToPx()],
  transformers: [transformerDirectives()],
});
