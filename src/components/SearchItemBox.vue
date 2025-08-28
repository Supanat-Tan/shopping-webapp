<template>

    <div 
    class="search-item-box" 
    :class="{ 'grid' : props.viewmode, 'list': !props.viewmode}"
    @click="enterDetailPage()"
    >
        <div>{{ props.item.productName }}</div>
        <div>Price: {{ props.item.price }}</div>
        <div>{{ props.item.soldAmount }} Sold</div>
        <button @click.stop="pushToCart">Add to Cart</button>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SearchItemPropType } from '@/types/type';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const props = defineProps<SearchItemPropType>()

const router = useRouter();

const cartStore = useCartStore();
const { cartItem } = storeToRefs(cartStore);
const { addCartItem } = useCartStore()

const pushToCart = () => {
    addCartItem({
        _id: props.item._id,
        productName: props.item.productName,
        price: props.item.price,
        quantity: 1
    })
    console.log("Cart", cartItem.value)
}

const enterDetailPage = async () => {
    router.push(`/product/${props.item._id}`)
}

</script>

<style lang="scss">
.search-item-box {
    background-color: $background;
    border: 2px solid $sec-text;
    border-radius: 30px;

    transform: scale(1.0, 1.0);
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.search-item-box:hover {
    background-color: $accent;
    transform: scale(0.98, 0.98);
}

.search-item-box.grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 300px;
}

.search-item-box.list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    width: 90%;
    height: 150px;
    padding: 10px;
}
</style>