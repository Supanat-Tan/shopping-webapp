export const apiCall = async (api: string, payload?: object) => {
    let response;

    switch (api) {
        case "get-user":
            response = await fetch(`/api/auth/${payload}`, {
                credentials: "include"
            })
            break;
    
        default:
            console.log("Invalid API call");
            break;
    }

    return response
}