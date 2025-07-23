<template>
    <nav class="navbar">
        <ul>
            <div>
                <RouterLink to="/">{{ language.navbar.home }}</RouterLink>
                <RouterLink to="/about">About</RouterLink>
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
import '@/styles/navbar.scss'

const searchInfo = ref('')

const { setLang, language } = useI18n()

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

const handleSubmit = async () => {
    console.log(searchInfo.value)
}
</script>
