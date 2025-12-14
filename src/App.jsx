import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/juegos"
                            element={<ItemListContainer category="juegos" />}
                        />
                        <Route path="/detail/:id" element={<ItemDetailContainer />} />
                        <Route path="/contacto" element={<Contact />} />
                        <Route path="/carrito" element={<Cart />} />
                    </Route>

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Login />} />
                        <Route
                            path="alta-productos"
                            element={
                                <RutaProtegida>
                                    <ProductFormContainer />
                                </RutaProtegida>
                            }
                        />
                    </Route>
                </Routes>

                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;







































