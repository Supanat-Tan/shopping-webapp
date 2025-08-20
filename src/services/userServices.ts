export const apiCall = async (api: string, payload?: object): Promise<Response> => {
    let response;

    switch (api) {
        case "get-user":
            response = await fetch(`/api/auth/${payload}`, {
                credentials: "include"
            })
            break;

        case "sign-up":
            response = await fetch(`/api/auth/signup`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case 'check-user':
            response = await fetch('/api/auth/me');
            break;

        case "login":
            response = await fetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case "logout":
            response = await fetch('/api/auth/logout', {
                method: "POST",
                credentials: "include"
            })
            break;
        
        default:
            throw new Error(`Invalid API call: ${api}`);
    }
    return response
}