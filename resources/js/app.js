import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes";
import VueSplide from "@splidejs/vue-splide";

const app = createApp(App)
app.use(router)
    .use(VueSplide)
    .mount('#app')
