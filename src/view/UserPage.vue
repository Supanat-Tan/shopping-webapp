<template>
    <NavBar />
    <div class="user-page">

        <div class="user-main-container">

            <div class="user-top-container">
                <div>
                    <img src="" alt="Your Image">
                </div>
                
                <div class="user-info-container">
                    <div>Username: {{ user.username }}</div>
                    <div>email: {{ user.email }}</div>
                    <div>Join since: {{ user.createdAt.split("T")[0] }}</div>
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
import { apiCall } from '@/services/userServices';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const router = useRouter();

onMounted(async () => {
    console.log("Sent")
    const checkUser = await fetch('/api/auth/686fc5bae802a3e2f74e8abe', {
        credentials: "include"
    });

    if (!checkUser) {
        router.push('/login')
        throw new Error("User is not currently login")
    }

    const jsonUser = await checkUser.json();
    const response = await apiCall("get-user", jsonUser._id);
    
    if (!response) {
        console.log("Something wrong")
        return;
    }

    const newUser = await response.json()
    console.log(newUser);
    userStore.setUser(newUser);
    
});

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