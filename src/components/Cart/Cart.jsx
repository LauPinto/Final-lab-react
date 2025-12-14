
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

import "./Cart.css"


export const Cart = () => {
    const { cart, clearCart, deleteItem, decreaseQuantity, total, checkout } = useCartContext();

    return (
        <section className="item-list-container">
            <h2>Carrito de Compras</h2>

            {cart.length ? (
                <table className="table-cart">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th></th>
                            <th>Precio</th>
                            <th>Cant.</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map(prod => (
                            <tr key={prod.id}>
                                <td>{prod.name}</td>

                                <td>
                                    <img src={prod.imageUrl} alt={prod.name} className="img-cart" />
                                </td>

                                <td>${prod.price}</td>

                                <td>{prod.quantity}</td>

                                <td>${prod.quantity * prod.price}</td>

                                <td>
                                    <button className="btn btn-cart" onClick={() => decreaseQuantity(prod.id)}>
                                        ➖
                                    </button>

                                    <button className="btn btn-cart delete" onClick={() => deleteItem(prod.id)}>
                                        ❌
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Tu carrito está vacío 🛒</p>
            )}

            {cart.length ? (
                <div className="btn-container">
                    <div className="total-pagar">
                        <p>Total: ${total()}</p>
                    </div>

                    <button className="btn" onClick={checkout}>
                        Finalizar Compra
                    </button>

                    <button className="btn" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                </div>
            ) : (
                <Link className="btn" to="/">
                    Volver al inicio
                </Link>
            )}
        </section>
    );
};