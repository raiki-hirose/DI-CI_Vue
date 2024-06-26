import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(createPersistedState()))
app.use(router)

app.mount('#app')
