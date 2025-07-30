<template>

    <div class="search-item-box" :class="{ 'grid' : props.viewmode, 'list': !props.viewmode}">
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
    height: 200px;
}

.search-item-box.list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 90%;
    padding: 10px;
}
</style>