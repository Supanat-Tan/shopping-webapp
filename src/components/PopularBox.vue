<template>
    <div class="popular-item-box">
        {{ props.msg }}
    </div>
</template>

<script setup lang="ts">
import { PopularBoxProps } from '@/types/type';
import { defineProps } from 'vue';

const props = defineProps<PopularBoxProps>()

</script>

<style lang="scss">
    //Each item
     .popular-item-box {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      height: 150px;

      background-color: $background;
      border-radius: 10px;

      color: $sec-text;

      transition: background-color 0.3s ease;
    }

    .popular-item-box:hover {
        background-color: $accent;
    }

</style>