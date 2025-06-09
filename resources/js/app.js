import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes";
import VueSplide from "@splidejs/vue-splide";
import VueKonva from 'vue-konva';

const app = createApp(App)
app.use(router)
    .use(VueSplide)
    .use(VueKonva)
    .mount('#app')
