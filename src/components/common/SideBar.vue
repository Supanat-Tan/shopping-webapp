<template>
    <div class="side-nav-container">
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SideBar',
})
</script>

<style lang="scss">
.side-nav-container {
    position: absolute;
    top: 75px;
    left: 0px;

    width: 300px;
    height: 100%;

    background-color: darkgreen;
}
</style>