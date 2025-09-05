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

                <div v-for="order in historyItems" :key="order._id">
                    <div v-for="product in order.product" :key="product._id">
                        <h3>{{ product.productName }}</h3>
                        <p>x {{ product.quantity }}</p>
                    </div>
                </div>
                <div v-if="historyItems?.length === 0">
                    No order yet
                </div>

            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import '@/styles/userpage.scss'
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const historyItems = computed(() => user.value?.orderHistory)


</script>

<style lang="scss">

</style>