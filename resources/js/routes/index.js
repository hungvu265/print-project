import {createRouter, createWebHistory} from "vue-router";

import Main from "../components/Main/Main.vue";
import Detail from "../components/Detail.vue";
import Category from "../components/Category.vue";
import Cart from "../components/Cart.vue";
import Question from "../components/Question.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: { label: 'Trang chủ', icon: '🏠' },
    },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/question', name: 'question', component: Question },
    {
        path: '/product/:name',
        name: 'detail',
        component: Detail,
        meta: { label: 'Chi tiết sản phẩm', icon: 'ℹ️' },
    },
    {
        path: '/category/:name',
        name: 'category',
        component: Category,
        meta: { label: 'Phân loại sản phẩm', icon: '⚙️' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

export default router
