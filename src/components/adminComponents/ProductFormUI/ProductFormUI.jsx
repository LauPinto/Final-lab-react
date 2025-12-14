export const ProductFormUI = ({
product,
errors,
loading,
onChange,
onFileChange,
onSubmit,
}) => {

    return (
    <section>
    <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>

        <label>Nombre</label>
        <input name="name" value={product.name} onChange={onChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Precio</label>
        <input
        name="price"
        type="number"
        value={product.price}
        onChange={onChange}
        />
        {errors.price && <p className="error">{errors.price}</p>}

        <label>Categoría</label>
        <input name="category" value={product.category} onChange={onChange} />
        {errors.category && <p className="error">{errors.category}</p>}

        <label>Consolas</label>
        <textarea
        name="description"
        value={product.description}
        onChange={onChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <label>Descripción larga</label>
        <textarea
        name="longDescription"
        value={product.longDescription}
        onChange={onChange}
        />
        {errors.longDescription && (
        <p className="error">{errors.longDescription}</p>
        )}

        <label>
        <input
            type="checkbox"
            name="destacado"
            checked={product.destacado}
            onChange={onChange}
        />
        Producto destacado
        </label>

        <label>Imagen</label>
        <input type="file" onChange={(e) => onFileChange(e.target.files[0])} />
        {errors.image && <p className="error">{errors.image}</p>}

        <button disabled={loading}>
        {loading ? "Guardando..." : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
    </form>
    </section>
);
};

