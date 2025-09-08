export const apiCall = async (api: string, payload?: unknown): Promise<Response> => {
    let response;

    switch (api) {
        case "get-user":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/auth/${payload}`, {
                credentials: "include"
            })
            break;

        case "sign-up":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/auth/signup`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case 'check-user':
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/me');
            break;

        case "login":
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/login', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case "logout":
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/logout', {
                method: "POST",
                credentials: "include"
            })
            break;

        case "get-all-product":
            response = await fetch('https://supanat-main-backend.onrender.com/api/product', {
                method: "GET"
            })
            break;

        case "get-one-product":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/product/${payload}`, {
                method: "GET"
            })
            break;

        case "check-out":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/order`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;
        
        default:
            throw new Error(`Invalid API call: ${api}`);
    }
    return response
}