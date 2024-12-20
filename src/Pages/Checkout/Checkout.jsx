import "./Checkout.css";
import { useCart } from "../Cart/CartContext";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const API_URL = "http://3.135.216.95:8080/api/order";
    const { totalPrice, extraCosts, setExtraCosts, finalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        calle: "",
        colonia: "",
        ciudad: "",
        codigoPostal: "",
        telefono: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    // Envío
    setExtraCosts(50);

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setFormData({
                nombre: loggedInUser.first_name || "",
                apellido: loggedInUser.last_name || "",
                calle: "",
                colonia: "",
                ciudad: "",
                codigoPostal: "",
                telefono: loggedInUser.phone || ""
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.nombre) errors.nombre = "El nombre es obligatorio.";
        if (!formData.apellido) errors.apellido = "El apellido es obligatorio.";
        if (!formData.calle) errors.calle = "La calle es obligatoria.";
        if (!formData.colonia) errors.colonia = "La colonia es obligatoria.";
        if (!formData.ciudad) errors.ciudad = "La ciudad es obligatoria.";
        if (!formData.codigoPostal) errors.codigoPostal = "El código postal es obligatorio.";
        if (!formData.telefono) errors.telefono = "El teléfono es obligatorio.";

        if (formData.telefono && !/^\d{10}$/.test(formData.telefono)) {
            errors.telefono = "El teléfono debe tener 10 dígitos.";
        }

        if (formData.codigoPostal && !/^\d{5}$/.test(formData.codigoPostal)) {
            errors.codigoPostal = "El código postal debe tener 5 dígitos.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            Swal.fire({
                icon: "error",
                title: "Por favor, completa todos los campos correctamente.",
            });
            return;
        }
        
        const cart = JSON.parse(localStorage.getItem("shoppingCart"));
        const orderProducts = cart.map((item) => ({
            product_id: item.product_id,
            product_name: item.product_name,
            quantity: item.quantity
        }));

        const now = new Date();
        const dateTime = format(now, "yyyy-MM-dd HH:mm:ss");
        const orderData = {
            date_time: dateTime,
            notes: `${finalPrice}`,
            quantity: cart.length,
            status: "En preparación",
            user_address: "test",
            user_id_fk: {
                user_id: JSON.parse(sessionStorage.getItem("loggedInUser")).user_id,
            },
            order_has_product: orderProducts,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                const result = await response.json();
                Swal.fire({
                    title: "Compra realizada con éxito",
                    icon: "success"
                });
                clearCart();
                navigate("/userpage");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error al realizar la compra. Inténtalo de nuevo",
                });
            }
        } catch (error) {
            console.error("Error al realizar la compra:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal"
            });
        }
    };

    return (
        <div className="cart-container">
            <div className="checkout-content">
                <form className="place-order">
                    <div className="place-order-left">
                        <p className="checkout-title">Detalles del pedido</p>
                        <div className="multi-fields">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                            />
                            {formErrors.nombre && <p className="checkout-error">{formErrors.nombre}</p>}
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                value={formData.apellido}
                                onChange={handleInputChange}
                            />
                            {formErrors.apellido && <p className="checkout-error">{formErrors.apellido}</p>}
                        </div>
                        <input
                            type="text"
                            name="calle"
                            placeholder="Calle"
                            value={formData.calle}
                            onChange={handleInputChange}
                        />
                        {formErrors.calle && <p className="checkout-error">{formErrors.calle}</p>}
                        <div className="multi-fields">
                            <input
                                type="text"
                                name="colonia"
                                placeholder="Colonia"
                                value={formData.colonia}
                                onChange={handleInputChange}
                            />
                            {formErrors.colonia && <p className="checkout-error">{formErrors.colonia}</p>}
                            <input
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                value={formData.ciudad}
                                onChange={handleInputChange}
                            />
                            {formErrors.ciudad && <p className="checkout-error">{formErrors.ciudad}</p>}
                        </div>
                        <div className="multi-fields">
                            <input
                                type="text"
                                name="codigoPostal"
                                placeholder="Código postal"
                                value={formData.codigoPostal}
                                onChange={handleInputChange}
                            />
                            {formErrors.codigoPostal && <p className="checkout-error">{formErrors.codigoPostal}</p>}
                            <input
                                type="text"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                            />
                            {formErrors.telefono && <p className="checkout-error">{formErrors.telefono}</p>}
                        </div>
                    </div>
                    <div className="place-order-right">
                        <div className="checkout-total">
                            <h2 className="checkout-title-total">Total</h2>
                            <div>
                                <div className="cart-total-details">
                                    <p>Subtotal</p>
                                    <p>{totalPrice.toFixed(2)}</p>
                                </div>
                                <hr />
                                <div className="cart-total-details">
                                    <p>Envío</p>
                                    <p>${extraCosts.toFixed(2)}</p>
                                </div>
                                <hr />
                                <div className="cart-total-details">
                                    <b>Total</b>
                                    <b>${finalPrice.toFixed(2)}</b>
                                </div>
                            </div>
                            <button
                                className="btn btn-success btn-purchase"
                                type="submit"
                                onClick={handlePurchase}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
