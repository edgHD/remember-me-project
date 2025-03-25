import { createApp } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App)

// Make uuid available globally
app.config.globalProperties.$uuid = uuidv4

app.component('base-card', BaseCard)

app.mount('#app')
