import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router