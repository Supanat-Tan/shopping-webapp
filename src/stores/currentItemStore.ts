import { CurrentItemType, Product } from "@/types/type";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCurrentItemStore = defineStore('itemDetail', () => {
    const currentItemRef = ref<CurrentItemType>(null);

    const currentItem = computed(() => currentItemRef.value)

    const setCurrentItem = (item: Product) => {
        currentItemRef.value = item
    }

    return { currentItem, setCurrentItem }
})