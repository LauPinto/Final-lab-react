import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const exists = cart.find(p => p.id === item.id);

        if (exists) {
            const updatedCart = cart.map(p =>
                p.id === item.id
                    ? { ...p, quantity: p.quantity + item.quantity }
                    : p
            );

            setCart(updatedCart);
            alert(`🔁 Cantidad actualizada: ahora tienes ${item.quantity + exists.quantity} unidades`);

        } else {
            setCart([...cart, item]);
            alert(`🛒 ${item.name} agregado al carrito`);
        }
    };

    const deleteItem = (id) => {
        const filtered = cart.filter(p => p.id !== id);
        setCart(filtered);
        alert(`🗑️ Producto eliminado del carrito`);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        return cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    const total = () =>{
        const total = cart .reduce((acc, p) => acc + (p.price * p.quantity), 0);
    
        return Math.round(total * 100) / 100;
    };

    const decreaseQuantity = (id) => {
    setCart(prev =>
        prev.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0)
    );
};

    const checkout = () => {
        const ok = confirm("¿Esta seguro que quiere finalizar la compra?");
        if (ok) {
            clearCart();
            alert("💜 Gracias por su compra! 💜");
        }
    };

    const values = { 
        cart, 
        addItem, 
        clearCart, 
        getTotalItems, 
        deleteItem,
        decreaseQuantity, 
        total, 
        checkout 
    };

    return ( 
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};


