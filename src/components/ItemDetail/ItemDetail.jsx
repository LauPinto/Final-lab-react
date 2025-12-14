import { useCartContext } from "../../context/CartContext/useCartContext";
import "./ItemDetail.css";
import { Count } from "../Count/Count";
import { Link } from "react-router-dom";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity });
    };

    const formatPrice = (price) => {
        const numericPrice = Number(price);
        const [integer, decimal] = numericPrice.toFixed(2).split(".");
        const integerWithDots = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `${integerWithDots},${decimal}`;
    };

    const formattedPrice = formatPrice(detail.price);

    return (
        <section className="detail-container">
            <div className="detail-card">
                <img
                    src={detail.imageUrl}
                    alt={detail.name}
                    className="detail-image"
                />

                <div className="detail-info">
                    <h2 className="detail-title">{detail.name}</h2>

                    <p className="detail-price">
                        Precio: ${formattedPrice}
                    </p>

                    <p className="detail-short">{detail.description}</p>
                    <p className="detail-long">{detail.longDescription}</p>

                    <Count btnText="Agregar al carrito" onConfirm={handleAdd} />

                    <Link to="/" className="btn-back-home">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </section>
    );
};
