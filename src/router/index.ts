import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";
import ItemListPage from "@/view/ItemListPage.vue";
import LoadingPage from "@/view/LoadingPage.vue";

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
    {
        path: '/loading',
        name: 'LoadingPage',
        component: LoadingPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router