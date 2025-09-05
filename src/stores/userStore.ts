import { apiCall } from "@/services/userServices";
import { User } from "@/types/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);

    const setUser = (newUser: User | null) => {
        user.value = newUser
    }

    const updateUser = async () => {
        const fetchedUser = await apiCall('check-user')
        const userJson = await fetchedUser.json()
        setUser(userJson);
    }

    const clearUser = () => {
        user.value = null
    }

    return { setUser, user, updateUser, clearUser };
})