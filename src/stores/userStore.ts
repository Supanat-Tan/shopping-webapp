import { User } from "@/types/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);

    const setUser = (newUser: User | null) => {
        user.value = newUser
    }

    return { setUser, user };
})