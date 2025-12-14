import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);

const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    longDescription: "",
    destacado: false,
});

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct({
    ...product,
    [name]: type === "checkbox" ? checked : value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProducts(product, true, file);
    if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setLoading(false);
    return;
    }

    try {
    const imageUrl = await uploadToImgbb(file);

    await createProduct({
        ...product,
        price: Number(product.price),
        imageUrl,
    });

    alert("Producto cargado con éxito 🎮");

    setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        longDescription: "",
        destacado: false,
    });
    setFile(null);
    } catch (error) {
    setErrors({ general: error.message });
    } finally {
    setLoading(false);
    }
};

return (
    <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={setFile}
        onSubmit={handleSubmit}
    />
);
};
