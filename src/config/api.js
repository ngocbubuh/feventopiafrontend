// src/api.js

export const signIn = async (userName, password) => {
    const response = await fetch('https://feventopia.azurewebsites.net/auth/SignIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
    });
    return response;
};

