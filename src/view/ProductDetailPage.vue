<template>
    <NavBar />
    <LoadingPage v-if="isLoading"/>
    <div class="product-detail-page">

        <div class="main-detail-container">

            <div class="top-detail-container">

                <div class="detail-img-container">
                    <div>
                        <img 
                        v-for="(img, index) in imgArray" 
                        :key="img._id" 
                        :class="{ 'active-main-img': activeImg === index,
                        'not-active-main-img': activeImg !== index }"
                        :src="img.src" 
                        :alt="'Main ' + img.alt"
                        >
                    </div>

                    <div>
                        <img 
                        v-for="(img, index) in imgArray" 
                        :key="img._id" 
                        :class="{ 'active-img': activeImg === index}" 
                        :src="img.src" 
                        :alt="img.alt"
                        @click="setActiveImage(index)"
                        >
                    </div>
                </div>

                <div class="right-product-detail">
                    <div>Name: {{ product?.productName }}</div>
                    <div>Price: {{ product?.price }}</div>
                    <div>Rating: {{ product?.averageRating }}</div>
                    <button @click="pushToCart">Add to cart</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import LoadingPage from './LoadingPage.vue';
import { useLoadingStore } from '@/stores/loading';
import { apiCall } from '@/services/userServices';
import { useRoute } from 'vue-router';
import { ProductDetailType } from '@/types/type';
import { useCartStore } from '@/stores/cart';

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const { setLoading } = useLoadingStore();

const route = useRoute();

const product = ref<ProductDetailType>(null);

//For testing
const imgArray = [
    {
        _id: 1,
        src: "https://inwfile.com/s-da/f5gm6r.jpg",
        alt: "img 1"
    },
    {
        _id: 2,
        src: "https://da.lnwfile.com/_/da/_raw/cv/cc/b0.jpg",
        alt: "img 2"
    },
    {
        _id: 3,
        src: "https://www.gundam.my/images/sell_products/interactive/1104/5.jpg",
        alt: "img 3"
    },
    {
        _id: 4,
        src: "https://www.gundam.my/images/sell_products/interactive/1104/2.jpg",
        alt: "img 4"
    },
    {
        _id: 5,
        src: "https://www.pro-bems.com/IMAGES/images_1/FIGMK59234/m/FIGMK59234_2.jpg",
        alt: "img 5"
    }
]

onMounted(async () => {
    setLoading(true);

    const productId = route.params.id;
    const response = await apiCall('get-one-product', productId);
    product.value = await response.json();

    setLoading(false);
})

//Img slider
const activeImgRef = ref(0);
const activeImg = computed(() => activeImgRef.value)

const setActiveImage = (order: number) => {
    activeImgRef.value = order
}

//Cart
const cartStore = useCartStore();
const { cartItem } = storeToRefs(cartStore);
const { addCartItem } = useCartStore()

const pushToCart = () => {
    if (!product.value) {
        alert("Fail to add this product to cart")
        return;
    }

    addCartItem({
        _id: product.value._id,
        productName: product.value.productName,
        price: product.value.price,
        quantity: 1
    })
    console.log("Cart", cartItem.value)
}




</script>

<style lang="scss">

.product-detail-page {
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    left: 50%;
    top: 100px;
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

    padding: 20px;

    background-color: $sec-text;

    //Detail container
    > div:nth-child(2) {
        color: $accent;
        padding: 10px;
    }
}

.detail-img-container {
    @include flex-column-center;
    gap: 10px;

    width: 500px;
    height: 500px;
    padding: 10px;

    color: $main-text;

    //Main image container
    > div:nth-child(1) {
        flex: 5;

        position: relative;

        width: 100%;
        height: 80%;
        
        //Main image
        > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 100%;
            height: 100%;

            background-color: $background;
            object-fit: contain;
            transition: opacity 1s ease;
        }
    }

    //image choice container
    > div:nth-child(2) {
        @include flex-row-center;
        gap: 10px;
        flex: 1;

        width: 100%;
        height: 20%;
        //Each image
        > img {
            flex: 1;

            width: 80px;
            height: 80px;

            background-color: $background;
            object-fit: contain;
        }
    }
}

.right-product-detail {
    @include flex-column-center;
    gap: 20px;

    width: 300px;
    height: 500px;
}

.active-main-img {
    opacity: 1;
}

.not-active-main-img {
    opacity: 0;
}

.active-img {
    border: 2px solid $accent;
}

</style>