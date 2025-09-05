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
            <p>Shipping fee = {{ shippingFee }} Baht</p>
            <p> = {{ totalPrice + shippingFee }} Baht</p>
        </div>

        <form @submit.prevent="handleCheckout">
            <label for="payment">Input the exact value</label>
            <input type="number" name="payment" id="payment" v-model="paymentValue">
            <button>Buy</button>
        </form>
    </div>

</template>

<script setup lang="ts">
import CheckoutProductBox from '@/components/CheckoutProductBox.vue';
import NavBar from '@/components/NavBar.vue';
import { apiCall } from '@/services/userServices';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const cartStore = useCartStore();
const { clearCart } = useCartStore();
const { cartItem } = storeToRefs(cartStore);

const userStore = useUserStore();
const { updateUser } = useUserStore();
const { user } = storeToRefs(userStore);

const totalPrice = computed(() => {
    return cartItem.value.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0)
});

const paymentValue = ref<number>(0);

const shippingFee = 50

const handleCheckout = async () => {
    try {
        if (paymentValue.value === totalPrice.value + shippingFee) {
            const response = await apiCall('check-out', {
                boughtUser: user.value,
                product: cartItem.value,
                date: Date.now
            })

            if (response) {
                console.log("Success");
                alert("Successfully placed your order");
                clearCart();
                updateUser();
                router.push('/user')
            }
        }
        else {
            console.log("Payment Invalid")
        }
    }

    catch(err) {
        console.log(err);
    }
};


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