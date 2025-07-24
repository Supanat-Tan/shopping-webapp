<template>

    <div class="search-item-box">
        <div>{{ props.item.name }}</div>
        <div>Price: {{ props.item.price }}</div>
        <div>{{ props.item.saleAmount }} Sold</div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SearchItemPropType } from '@/types/type';

const props = defineProps<SearchItemPropType>()

</script>

<style lang="scss">
.search-item-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
}
</style>