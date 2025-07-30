<template>
    <NavBar />
    <SideBar />
    <LoadingPage v-if="isLoading"/>
    <div class="listpage-container">

        <div>
            <div class="button-container">
                <button>Name</button>
                <button>Sale Amount</button>
                <button>Price</button>

                <div>
                    <button @click="toggleView('grid')">Grid</button>
                    <button @click="toggleView('row')">Row</button>
                </div>
            </div>

            <div class="itemlist-container" :class="{ grid: viewgrid, row: !viewgrid}">
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
import SideBar from '@/components/SideBar.vue';
import LoadingPage from './LoadingPage.vue';
import { useSearchItemStore } from '@/stores/searchItem';
import { ref } from 'vue';
import { useLoadingStore } from '@/stores/loading'

const searchItems = useSearchItemStore();
const { isLoading } = useLoadingStore();
const viewgrid = ref(true);

const toggleView = (type: string) => {
    if (type === 'grid') {
        viewgrid.value = true
    }

    else if (type === 'row') {
        viewgrid.value = false
    }
}

</script>

<style lang="scss">
.listpage-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);

    width: auto;
    max-width: 1080px;
    padding: 20px;

    background-color: $sec-text;
    border-radius: 50px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}
// Product Container
//.itemlist-container {
    
//}

//For grid view
.itemlist-container.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

//For row view
.itemlist-container.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    //Affect All button
    button {
        border: none;
        background-color: transparent;

        color: $accent;
        font-weight: bold;
        font-size: 1.2rem;

        cursor: pointer;
    }

    // Only affect sort button
    > button {
        border-right: 2px solid $accent;
    }

    //Right Section grid row toggle
    > div {
        margin-left: 20px;

        //Only grid and row button
        > button {
            margin-left: 5px;

            border: 2px solid $accent;
        }
    }
}
</style>