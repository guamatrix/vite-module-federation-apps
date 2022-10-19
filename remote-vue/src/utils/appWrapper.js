import { createApp } from 'vue'
import App from '../App.vue'

export default (element) => {
    const app = createApp(App).mount(element)
}