<template>
    <LoadingPage v-if="isLoading"/>
    <nav class="navbar">
        
        <ul>
            <div>
                <RouterLink to="/">{{ language.navbar.home }}</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>

            <div>
                <li @click="setLang('th')">TH</li>
                <li @click="setLang('en')">EN</li>
                <RouterLink v-if="user" to="/user">User</RouterLink>
                <RouterLink v-if="!user" to="/auth">Login</RouterLink>
                <li v-if="user" @click="signOut">Logout</li>
            </div>
        </ul>

        <div class="bottom-container-with-search">
            <div>Logo</div>

            <div class="form-wrapper">
                <form action="" class="search-form" @submit.prevent="handleSubmit">
                    <input type="text" placeholder="Search for Product" name="" id="" v-model="searchInfo">
                    <button>Search</button>
                </form>
            </div>

            <div v-if="searchInfo" class="search-popover">
                <div>
                    <div>Search For: {{ searchInfo }}</div>
                    <div 
                    v-for="item in jsonData" 
                    :key="item._id"
                    @click="enterProductPage(item._id)"
                    >
                    {{ item.productName }}
                    </div>
                </div>
                
            </div>
            
            <div @click.stop="checkCart">Cart</div>
            <div>{{ cartCount? cartCount : 0 }}</div>
            <button @click.stop="clearCart">Clear cart</button>
        </div>
        
    </nav>
</template>

<script lang="ts" setup>
import { useI18n } from '@/i18n/i18n';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import '@/styles/navbar.scss'
import { useLoadingStore } from '@/stores/loading';
import LoadingPage from '@/view/LoadingPage.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { useAuth } from '@/hooks/useAuth';
import { useCartStore } from '@/stores/cart';
import type { ProductListType } from '@/types/type';

const searchInfo = ref('');

const { logout } = useAuth();

const signOut = async () => {
   const response = await logout();

   if (response) {
    router.push('/')
    window.location.reload();
   }
   
}

//Loading store
const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore)

//User store
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

//Language store
const { setLang, language } = useI18n();

//Cart
const cartStore = useCartStore();
const { clearCart } = useCartStore();
const { cartItem, cartCount } = storeToRefs(cartStore)

const checkCart = () => {
    console.log(cartItem.value)
}

const router = useRouter();

//Enter detail page
const enterProductPage = (_id: string) => {
    router.push(`/product/${_id}`)
}

//Pause Fetch
let debounceTimer: number | null = null

let jsonData = ref<ProductListType>([]);

const searchTemp = async () => {
    if (debounceTimer) clearTimeout(debounceTimer)
    if (!searchInfo.value) return

    debounceTimer = setTimeout(async() => {
        const response = await fetch(`/api/product?productName=${searchInfo.value}`)
        jsonData.value = await response.json()
    }, 1000)  
}

watch(searchInfo, () => {
    searchTemp()
})

const handleSubmit = async () => {
    router.push({
        path: '/search',
        query: { productName: searchInfo.value}
    })
}
</script>
