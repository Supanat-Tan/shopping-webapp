<template>
    <div class="loading-page-container">
        <h1>Loading...</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.loading-page-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;

    width: 100%;
    height: 100%;
    background-color: $background;

    > h1 {
        width: 100%;

        color: $main-text;
        text-align: center;
    }
}
</style>