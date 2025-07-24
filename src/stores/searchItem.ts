import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Product, ProductListType } from "@/types/type";

export const useSearchItemStore = defineStore('searchItem', () => {
    const searchitems = ref<Product[]>([])

    const productList = computed(() => searchitems.value)

    const setItemList = (items: ProductListType) => {
        searchitems.value = items
    }

    return { productList, searchitems, setItemList }
})