import { User } from "@/types/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref<User>({
        _id: "",
        email: "",
        username: "",
        createdAt: "",
    });

    const setUser = (newUser: User) => {
        user.value = newUser
    }

    return { setUser, user };
})