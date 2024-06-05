// vite.config.ts
import UnoCSS from 'unocss/vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { defineConfig } from 'vite'
import { NutResolver } from 'nutui-uniapp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutResolver()],
    }),
    uni(),
    UnoCSS(),
    { // 自定义插件禁用 vite:vue 插件的 devToolsEnabled，强制编译 vue 模板时 inline 为 true
      name: 'fix-vite-plugin-vue',
      configResolved(config) {
        const plugin = config.plugins.find(p => p.name === 'vite:vue')
        if (plugin && plugin.api && plugin.api.options) {
          plugin.api.options.devToolsEnabled = false
        }
      },
    },
  ],
})
