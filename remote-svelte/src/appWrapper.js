import './app.css'
import App from './App.svelte'

export default (element) => {
    const app = new App({
        target: element
    })
}