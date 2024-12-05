import "./Checkout.css";
import { useCart } from "../Cart/CartContext";
import { Container } from "@mui/material";

const Checkout = () => {
    const { totalPrice, extraCosts, setExtraCosts, finalPrice } = useCart();
    setExtraCosts(50);
    return (
        <div className="cart-container">
            <div className="cart-content">
                <form className="place-order">
                    <div className="place-order-left">
                        <p className="checkout-title">Detalles del pedido</p>
                        <div className="multi-fields">
                            <input type="text" placeholder="Nombre" />
                            <input type="text" placeholder="Apellido" />
                        </div>
                        <input type="text" placeholder="Calle" />
                        <div className="multi-fields">
                            <input type="text" placeholder="Colonia" />
                            <input type="text" placeholder="Ciudad" />
                        </div>
                        <div className="multi-fields">
                            <input type="text" placeholder="Código postal" />
                            <input type="text" placeholder="Teléfono" />
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
                                onClick={() => alert("Compra realizada con éxito!")}
                            >
                                Método de pago
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout;