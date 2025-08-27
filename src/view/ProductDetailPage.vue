<template>
    <NavBar />
    <LoadingPage v-if="isLoading"/>
    <div class="product-detail-page">

        <div class="main-detail-container">

            <div class="top-detail-container">
                <div>Img</div>

                <div>
                    <div>{{ product?.productName }}</div>
                    <div>{{ product?.price }}</div>
                    <div>{{ product?.averageRating }}</div>
                </div>
            </div>

            <div class="bottom-detail-container">
                <div>description</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import LoadingPage from './LoadingPage.vue';
import { useLoadingStore } from '@/stores/loading';
import { apiCall } from '@/services/userServices';
import { useRoute } from 'vue-router';
import { ProductDetailType } from '@/types/type';

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const { setLoading } = useLoadingStore();

const route = useRoute();

const product = ref<ProductDetailType>(null);

onMounted(async () => {
    setLoading(true);

    const productId = route.params.id;
    const response = await apiCall('get-one-product', productId);
    product.value = await response.json();

    setLoading(false);
})


</script>

<style lang="scss">

.product-detail-page {
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
}

.main-detail-container {
    @include flex-column-center;
    gap: 50px;
}

.top-detail-container {
    @include flex-row-center;
    gap: 50px;

    //Img container
    > div:nth-child(1) {
        color: $sec-text;
    }

    //Detail container
    > div:nth-child(2) {
        color: $sec-text;
    }
}

</style>