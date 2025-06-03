import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home.vue'
import About from "../pages/About.vue";
import Settings from "../pages/Setting.vue";
import Profile from "../pages/Profile.vue";
import Security from "../pages/Security.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { label: 'Trang chủ', icon: '🏠' },
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { label: 'Giới thiệu', icon: 'ℹ️' },
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: { showInTaskbar: true, label: 'Cài đặt', icon: '⚙️' },
        children: [
            {
                path: 'profile',
                name: 'SettingsProfile',
                component: Profile,
                meta: { showInTaskbar: true, label: 'Hồ sơ' },
            },
            {
                path: 'security',
                name: 'SettingsSecurity',
                component: Security,
                meta: { showInTaskbar: true, label: 'Bảo mật' },
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
