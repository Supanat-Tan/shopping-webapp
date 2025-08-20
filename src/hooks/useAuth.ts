import { apiCall } from "@/services/userServices";
import { useUserStore } from "@/stores/userStore";

export const useAuth = () => {
    const userStore = useUserStore();

    const signup = async (payload: object) => {
        try {
            const response = await apiCall("sign-up", payload)

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Sign-up failed');
            }

            const json = await response.json();

            return json
        }

        catch(err) {
            const message = err instanceof Error ? err.message: String(err);
            return { error: message };
        }
    };

    const login = async (payload: object) => {
        try {
            const response = await apiCall('login', payload);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed');
                
            }

            const json = await response.json();
            const user = json.user
            userStore.setUser(user)
            return {
                message: "Success",
                user
            }
        }   
        catch(err) {
            console.log("Err", err)
            const message = err instanceof Error ? err.message: String(err);
            return { error: message };
        }  
    };

    const logout = async () => {
        const response = await apiCall("logout")
        if (response.ok) {
            return { message: "Success"}
        }
    };
    
    return {
    login,
    logout,
    signup
    }
}

