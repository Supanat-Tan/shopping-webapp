import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";
import ItemListPage from "@/view/ItemListPage.vue";
import LoadingPage from "@/view/LoadingPage.vue";
import UserPage from "@/view/UserPage.vue";
import AuthPage from "@/view/AuthPage.vue";
import ProductDetailPage from "@/view/ProductDetailPage.vue";
import CheckoutPage from "@/view/CheckoutPage.vue";

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
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    },
    {
        path: '/auth',
        name: 'AuthPage',
        component: AuthPage
    },
    {
        path: '/product/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage
    },
    {
        path: '/checkout',
        name: 'CheckoutPage',
        component: CheckoutPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router