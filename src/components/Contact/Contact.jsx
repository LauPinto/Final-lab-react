import "./Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);

        alert("Mensaje enviado correctamente 💜");
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <section className="contact-container">
            <h2>Déjanos tu mensaje</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />

                <label>Mensaje</label>
                <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="contact-btn">
                    Enviar Mensaje
                </button>
            </form>

            <div className="back-home">
                <Link to="/" className="back-home-link">
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
};
