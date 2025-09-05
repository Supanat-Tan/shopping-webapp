<template>
    <div class="popular-item-box" @click="goToProductDetail(props.productId)">
        <div>{{ props.msg }}</div>
        <div>Sold: {{ props.amount }}</div>
    </div>
</template>

<script setup lang="ts">
import { PopularBoxProps } from '@/types/type';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<PopularBoxProps>()

const router = useRouter();

const goToProductDetail = (_id: string) => {
    router.push(`/product/${_id}`)
}

</script>

<style lang="scss">
//Each item
.popular-item-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 150px;

    background-color: $background;
    border-radius: 10px;

    color: $sec-text;
    cursor: pointer;

    transition: background-color 0.3s ease;

    > div:not(:nth-child(1)) {
        margin-top: 10px;
    }
}

.popular-item-box:hover {
    background-color: $accent;
}

</style>