import React from "react";
import "./Cart.css";
import { useCart } from "./CartContext";

const Cart = () => {
    const { cart, removeFromCart, updateCartItemQuantity } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="cart-container">
            <div className="cart-content">
                <h1 className="cart-title">Carrito de compras</h1>
                {cart.length === 0 ? (
                    <p className="empty-cart">Tu carrito está vacío</p>
                ) : (
                    <>
                        <div className="cart-row">
                            <h3 className="cart-header cart-column cart-img"></h3>
                            <h3 className="cart-header cart-column cart-item">Pedido</h3>
                            <h3 className="cart-header cart-column cart-quantity">Cantidad</h3>
                            <h3 className="cart-header cart-column cart-price">Precio</h3>
                            <h3 className="cart-header cart-column cart-remove"></h3>
                        </div>

                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-row">
                                    <div className="cart-column cart-img">
                                        <img
                                            src={item.imageURL}
                                            alt={item.name}
                                            className="cart-item-image"
                                        />
                                    </div>

                                    <div className="cart-column cart-item">
                                        <span className="cart-text">{item.name}</span>
                                    </div>

                                    {/* Botones de cantidad */}
                                    <div className="cart-column cart-quantity">
                                        <div className="quantity-control">
                                            <button
                                                className="quantity-btn"
                                                onClick={() =>
                                                    updateCartItemQuantity(item.id, item.quantity - 1)
                                                }
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <span className="quantity-display">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() =>
                                                    updateCartItemQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Precio */}
                                    <div className="cart-column cart-price">
                                        <span className="cart-text">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>

                                    {/* Botón de eliminar */}
                                    <div className="cart-column cart-remove">
                                        <button
                                            className="btn btn-danger btn-remove"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-total">
                            <strong className="cart-total-title">Total</strong>
                            <span className="cart-total-price">${total.toFixed(2)}</span>
                        </div>

                        <button
                            className="btn btn-success btn-purchase"
                            onClick={() => alert("Compra realizada con éxito!")}
                        >
                            Comprar
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;
