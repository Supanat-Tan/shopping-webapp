<template>
    <div class="category-box">
        {{ props.msg }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { CategoryBoxProps } from '@/types/type';

const props = defineProps<CategoryBoxProps>()

</script>

<style lang="scss">
//Each box style
.category-box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    background-color: $background;
    border-radius: 10px;

    color: $sec-text;

    transition: background-color 0.3s ease;
}

.category-box:hover {
    background-color: $accent;
}
</style>