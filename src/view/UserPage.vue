<template>
    <NavBar />
    <div class="user-page">

        <div class="user-main-container">

            <div class="user-top-container">
                <div>
                    <img src="" alt="Your Image">
                </div>
                
                <div class="user-info-container">
                    <div>Username: {{ user?.username }}</div>
                    <div>email: {{ user?.email }}</div>
                    <div>Join since: {{ user?.createdAt?.split("T")[0] }}</div>
                    <div></div>
                </div>
            </div>

            <div class="user-bottom-container">
                <div v-for="item in historyItems" :key="item.id">
                    {{ item.name }}
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { onMounted } from 'vue';
import '@/styles/userpage.scss'
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
    console.log(user.value)
    
});

//For testing
const historyItems = [
    {
        id: 1,
        name: "Freedom Gundam"
    },
    {
        id: 2,
        name: "Wing Zero Gundam"
    }
]

</script>

<style lang="scss">

</style>