import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoadingStore = defineStore('loading' , () => {
    const isLoadingRef = ref(false);

    const isLoading = computed(() => isLoadingRef.value)

    const setLoading = (load: boolean) => {
        if (load === true) {
            isLoadingRef.value = true
        }
        else if (load === false) {
            isLoadingRef.value = false
        }
    }

    return {
        isLoading,
        setLoading
    }
})