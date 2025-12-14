const BASE_URL = "https://6939981ac8d59937aa086c46.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

if (!res.ok) {
    throw new Error("Error: no se pudo crear el producto");
}

return await res.json();
};

export const getProducts = async (category) => {
let url = BASE_URL;
if (category) {
    url = `${BASE_URL}?category=${category}`;
}

const res = await fetch(url);
if (!res.ok) {
    throw new Error("Error al listar productos");}

    const results = await res.json();
    return results;
};
