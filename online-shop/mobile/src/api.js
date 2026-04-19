const BASE_URL = "http://192.168.0.227:3001/api";

export const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    return res.json();
};

export const getCart = async () => {
    const res = await fetch(`${BASE_URL}/cart`);
    return res.json();
};

export const addToCart = async (product) => {
    const res = await fetch(`${BASE_URL}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    return res.json();
};

export const removeFromCart = async (id) => {
    const res = await fetch(`${BASE_URL}/cart/${id}`, {
        method: "DELETE",
    });
    return res.json();
};