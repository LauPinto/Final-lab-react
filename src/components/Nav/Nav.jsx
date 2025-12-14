import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <h1 className="nav-logo"> Glitch Haven </h1>
            </div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/juegos">Juegos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li className="cart">
                <Link to="/carrito">🛒</Link>
                {getTotalItems() > 0 && (
                <span className="in-cart">{getTotalItems()}</span>
            )}
        </li>
        </ul>
    </nav>
);
};
