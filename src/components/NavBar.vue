<template>
    <LoadingPage v-if="isLoading"/>
    <nav class="navbar">
        <ul>
            <div>
                <RouterLink to="/">{{ language.navbar.home }}</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/loading">About</RouterLink>
            </div>
            <div>
                <li @click="setLang('th')">TH</li>
                <li @click="setLang('en')">EN</li>
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
                <span>Search For: {{ searchInfo }}</span>
            </div>
            
            <div>Cart</div>
        </div>
        
    </nav>
</template>

<script lang="ts" setup>
import { useI18n } from '@/i18n/i18n';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import '@/styles/navbar.scss'
import { useSearchItemStore } from '@/stores/searchItem';
import { useLoadingStore } from '@/stores/loading';
import LoadingPage from '@/view/LoadingPage.vue';
import { storeToRefs } from 'pinia';

const searchInfo = ref('');

//Loading store
const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore)
const { setLoading } = loadingStore

const { setLang, language } = useI18n();

const router = useRouter();

const searchData = useSearchItemStore();

//Pause Fetch
let debounceTimer: number | null = null

const searchTemp = async () => {
    if (debounceTimer) clearTimeout(debounceTimer)
    if (!searchInfo.value) return

    debounceTimer = setTimeout(async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.ok) {
            const users = await response.json();
            console.log(users);
            console.log(searchInfo.value)
        }
    }, 1000)  
}

watch(searchInfo, () => {
    searchTemp()
})

//For seach data test
const data = [
    {
        _id: '1',
        name: 'Gundam OO',
        price: 1500,
        saleAmount: 25,
    },
    {
        _id: '2',
        name: 'Gundam Wing',
        price: 1300,
        saleAmount: 25,
    },
    {
        _id: '3',
        name: 'Freedom Gundam',
        price: 1800,
        saleAmount: 25,
    },
    {
        _id: '4',
        name: 'Unicorn Gundam',
        price: 2500,
        saleAmount: 25,
    },
]

const handleSubmit = async () => {
    console.log(searchInfo.value)
    searchData.setItemList(data)
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        router.push('/search')
    }, 1000)
}
</script>
