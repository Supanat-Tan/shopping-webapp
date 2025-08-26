import { Cart, CartItem } from "@/types/type";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCartStore = defineStore('cartItem', () => {
    const cartItemsRef = ref<Cart>([]);

    const cartItem = computed(() => cartItemsRef.value)

    const cartCount = computed(() =>
        cartItemsRef.value.reduce((sum, item) => sum + item.quantity, 0)
    )

    const addCartItem = (item: CartItem) => {
        const existing = cartItemsRef.value.find(i => i._id === item._id)

        if(existing) {
            existing.quantity += 1
        }
        else {
            cartItemsRef.value.push({ ...item, quantity: 1})
        }
    }

    const removeCartItem = (_id: string) => {
        cartItemsRef.value = cartItemsRef.value.filter(item => item._id !== _id)
    }

    const clearCart = () => {
        cartItemsRef.value = [];
    }

    return { 
        cartItemsRef,
        addCartItem,
        cartItem,
        removeCartItem,
        clearCart,
        cartCount 
    }
}, {
    persist: true
})