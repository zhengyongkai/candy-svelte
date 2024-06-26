// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';
import presetRemToPx from '@unocss/preset-rem-to-px';

import common from './theme/common';

console.log(common);

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    ...common
  },

  presets: [
    presetIcons({
      /* options */
    }),
    presetRemToPx({
      baseFontSize: 4
    }),
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()]
});
