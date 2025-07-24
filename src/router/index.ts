import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";
import ItemListPage from "@/view/ItemListPage.vue";

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
    },
    {
        path: '/search',
        name: 'ItemListPage',
        component: ItemListPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router