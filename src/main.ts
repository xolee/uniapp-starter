import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import App from './App.vue'
import 'virtual:uno.css'

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)

  pinia.use(createUnistorage())
  app.use(pinia)

  return {
    app,
  }
}
