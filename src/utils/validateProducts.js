export const validateProducts = (product, fileRequired = true, file) => {
    const errors = {};

if (!product.name.trim()) {
    errors.name = "El nombre del producto es obligatorio";
}

if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor a 0";
}

if (!product.description.trim()) {
    errors.description = "Para qué consola es obligatorio";
}

if (!product.longDescription.trim()) {
    errors.longDescription = "La descripción es obligatoria";
}

if (!product.category.trim()) {
    errors.category = "La categoría es obligatoria";
}

if (fileRequired && !file) {
    errors.image = "Debes seleccionar una imagen";
}

return errors;
};
