// uno.config.ts
import { defineConfig } from 'unocss'
import {
  presetApplet,
  presetRemRpx,
  transformerAttributify,
} from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx(),
  ],
  transformers: [
    transformerAttributify({ ignoreAttributes: ['block'] }),
  ],
})
