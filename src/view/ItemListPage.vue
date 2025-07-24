<template>
    <NavBar />
    <div class="listpage-container">

        <div>
            <div class="button-container">
                <button>Name</button>
                <button>Sale Amount</button>
                <button>Price</button>
            </div>

            <div class="itemlist-container">
                <SearchItemBox 
                v-for="item in searchItems.productList" 
                :key="item._id"
                :item="item"
                />
            </div>
        </div>
        
        
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import SearchItemBox from '@/components/SearchItemBox.vue';
import { useSearchItemStore } from '@/stores/searchItem';

const searchItems = useSearchItemStore();

</script>

<style lang="scss">
.listpage-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 100px;

    width: 100%;
}

.itemlist-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>