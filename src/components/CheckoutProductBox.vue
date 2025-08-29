<template>
    <div class="checkout-item-container">
        <div>{{ props.productName }}</div>
        <div>{{ props.price }} x {{ props.quantity }}</div>
    </div>
</template>

<script setup lang="ts">
import { CheckOutItemProps } from '@/types/type';
import { defineProps } from 'vue';
const props = defineProps<CheckOutItemProps>()

</script>

<style lang="scss">
.checkout-item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    width: 100%;
    height: 100px;
    padding: 10px;

    border: 2px solid $main-text;
    border-radius: 10px;
    background-color: $background;

    color: $main-text;
}
</style>