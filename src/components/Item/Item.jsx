import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {

    const formattedPrice = new Intl.NumberFormat("es-AR").format(price);

    return (
        <article className="product-item">

            <div className="product-image-container">
                <img
                    src={imageUrl}
                    alt={description}
                    className="product-image"
                />
            </div>

            <h2 className="product-title">{name}</h2>

            <p className="product-price">
                Precio: ${formattedPrice}
            </p>

            <p className="product-description">
                {description}
            </p>

            {children}
        </article>
    );
};

