import { createApp } from 'vue'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Bar } from './views/Bar'
import { Foo } from './views/Foo'
const routes = [
  { path: '/', component: Bar },
  { path: '/about', component: Foo },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')
