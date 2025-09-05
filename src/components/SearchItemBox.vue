<template>

    <div 
    class="search-item-box" 
    :class="{ 'grid' : props.viewmode, 'list': !props.viewmode}"
    @click="enterDetailPage()"
    >
        <div class="item-box-img-container">
            <img src="" alt="Product Image">
        </div>

        <div>
            <div>{{ props.item.productName }}</div>
            <div>Price: {{ props.item.price }}</div>
            <div>{{ props.item.soldAmount }} Sold</div>
            <button @click.stop="pushToCart">Add to Cart</button>
        </div>
        
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SearchItemPropType } from '@/types/type';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { useAuth } from '@/hooks/useAuth';
import { useUserStore } from '@/stores/userStore';

const props = defineProps<SearchItemPropType>()

const router = useRouter();

const cartStore = useCartStore();
const { cartItem } = storeToRefs(cartStore);
const { addCartItem } = useCartStore()

const { checkUser } = useAuth();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const pushToCart = async () => {
    if (user.value) {
        addCartItem({
            _id: props.item._id,
            productName: props.item.productName,
            price: props.item.price,
            quantity: 1
        })

        return;
    }

    const userAuth = await checkUser();
    if (!userAuth) {
        return;
    }

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
    padding: 10px;
    
    background-color: $background;
    border: 2px solid $sec-text;
    border-radius: 30px;

    transform: scale(1.0, 1.0);
    transition: transform 0.3s ease, background-color 0.3s ease;

    cursor: pointer;
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
    gap: 5px;

    width: 200px;
    height: 300px;

}

.search-item-box.list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 10px;

    width: 90%;
    height: 150px;
    padding: 15px;

    //Image container
    > div:nth-child(1) {
        flex: 2;
    }

    //Detail container
    > div:nth-child(2) {
        flex: 8;

        > button {
            margin-top: 75px;
        }
    }
}

.item-box-img-container {
    @include flex-column-center;

    height: 150px;
    width: 100%;
    margin-bottom: 30px;

    border: 1px solid $main-text;
}
</style>