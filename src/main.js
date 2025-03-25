import { createApp } from 'vue'
import App from './App.vue'
import { v4 as uuidv4 } from 'uuid'

const app = createApp(App)

// Make uuid available globally
app.config.globalProperties.$uuid = uuidv4

app.mount('#app')
