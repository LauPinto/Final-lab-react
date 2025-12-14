import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = ({ category }) => {
    const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts()
    .then((data) => {
        let filtered = data;

        if (category) {
        filtered = data.filter(
            (prod) =>
                prod.category &&
                prod.category.toLowerCase() === category.toLowerCase()
        );
        } else {

        filtered = data.filter((prod) => prod.destacado);
        }

        setProducts(filtered);
    })
    .catch((err) => console.log(err));
    }, [category]);

return (
    <section>
    <h1>
        {category
            ? "🎮 Juegos"
            : "🎮 Bienvenidos a Glitch Haven 🎮"}
    </h1>

    {!category && (
        <p>Estos son algunos de nuestros productos destacados:</p>
    )}

    <div className="itemListContainer">
        <ItemList list={products} />
    </div>
    </section>
);
};
