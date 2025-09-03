<template>
    <NavBar />
    <div class="checkout-page">

        <div v-show="totalPrice !== 0" class="main-checkout-container">
            
            <div class="product-checkout-container">
                <CheckoutProductBox 
                v-for="item in cartItem" 
                :key="item._id"
                :_id="item._id"
                :productName="item.productName"
                :price="item.price"
                :quantity="item.quantity"
                />
            </div>

                  
        </div>
    </div>

    <div class="order-detail-container">
        <div>
            <h2>Total price</h2>
            <p> = {{ totalPrice }} Baht</p>
        </div>
    </div>

</template>

<script setup lang="ts">
import CheckoutProductBox from '@/components/CheckoutProductBox.vue';
import NavBar from '@/components/NavBar.vue';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cartStore = useCartStore();
const { cartItem } = storeToRefs(cartStore);

const totalPrice = computed(() => {
    return cartItem.value.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0)
});




</script>

<style lang="scss">
.checkout-page {
    @include flex-column-center;

    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);

    width: 100%;

    background-color: $background;
}

.main-checkout-container {
    @include flex-row-center;
    gap: 20px;

    position: relative;

    height: auto;
    padding: 20px;

    border-radius: 20px;

    background-color: $sec-text;
}

.product-checkout-container {
    @include flex-column-center;
    gap: 10px;

    height: 100%;
    width: 300px;
}

.order-detail-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;

    position: fixed;
    top: 50px;
    right: 0px;

    width: 400px;
    height: 100%;
    padding: 20px;

    background-color: $sec-text;
    border: 2px solid $sec-text;

    //Inside container
    > div {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        width: 100%;
        background-color: $background;
    }
}
</style>