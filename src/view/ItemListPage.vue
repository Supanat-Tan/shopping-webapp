<template>
    <NavBar />
    <div class="listpage">

        <div>
            <div class="button-container">
                <button>Name</button>
                <button>Sale Amount</button>
                <button>Price</button>

                <div>
                    <button @click="toggleView('grid')">Grid</button>
                    <button @click="toggleView('list')">List</button>
                </div>
            </div>

            <div class="itemlist-container" :class="{ 'grid': viewgrid, 'list': !viewgrid}">
                <SearchItemBox 
                v-for="item in productList" 
                :key="item._id"
                :item="item"
                :viewmode="viewgrid"
                />
            </div>
        </div>
        
        
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import SearchItemBox from '@/components/SearchItemBox.vue';
import { useSearchItemStore } from '@/stores/searchItem';
import { onMounted, ref } from 'vue';
import { useLoadingStore } from '@/stores/loading'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const searchItems = useSearchItemStore();
const { setItemList } = useSearchItemStore();
const { productList } = storeToRefs(searchItems)

//Loading component
const { setLoading } = useLoadingStore();

//Route
const route = useRoute();

const searchQuery = route.query.productName

onMounted(async () => {
    setLoading(true)
    const response = await fetch(`/api/product?productName=${searchQuery}`);
    const jsonData = await response.json();

    setItemList(jsonData);
    setLoading(false)
})

//View mode
const viewgrid = ref(true);

const toggleView = (type: string) => {
    if (type === 'grid') {
        viewgrid.value = true
    }

    else if (type === 'list') {
        viewgrid.value = false
    }

}

</script>

<style lang="scss">
.listpage {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);

    width: 70%;
    padding: 20px;

    background-color: transparent;
    border-radius: 50px;

    //Main container
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        width: 80%;
    }
}
//Product Container
.itemlist-container {
    width: 100%;
}

//For grid view
.itemlist-container.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    gap: 10px;
}

//For row view
.itemlist-container.list {
    display: flex;
    flex-direction: column;
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
        border: 2px solid $sec-text;
        background-color: transparent;

        color: $main-text;
        font-weight: bold;
        font-size: 1.2rem;

        cursor: pointer;
    }

    // Only affect sort button
    //> button {

    //}

    //Right Section grid row toggle
    > div {
        margin-left: 20px;

        //Only grid and row button
        > button {
            margin-left: 5px;

            
        }
    }
}
</style>