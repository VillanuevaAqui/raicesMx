import React from "react";
import "./Cart.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';

const Cart = () => {
    const { cart, removeFromCart, updateCartItemQuantity, totalPrice, updateCartExtras } = useCart();

    const isMobile = useMediaQuery('(max-width:805px)');

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
                            <h3 className="cart-header cart-column">Extras</h3>
                            <h3 className="cart-header cart-column cart-price">Precio</h3>
                            <h3 className="cart-header cart-column cart-remove"></h3>
                        </div>

                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.product_id} className="cart-row">
                                    <div className="cart-column cart-img">
                                        <img
                                            src={item.image}
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
                                                    updateCartItemQuantity(item.product_id, item.quantity - 1)
                                                }
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <span className="quantity-display">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() =>
                                                    updateCartItemQuantity(item.product_id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-column cart-extras">
                                        {item.extras.map((extra, index) => (
                                            <label key={index} className="extra-item">
                                                <input
                                                    type="checkbox"
                                                    className="cart-checkbox"
                                                    checked={item.selectedExtras.some((e) => e.name === extra.name)}
                                                    onChange={(e) => {
                                                        const isChecked = e.target.checked;
                                                        updateCartExtras(item.product_id, extra, isChecked);
                                                    }}
                                                />
                                                {extra.name} (+${extra.price})
                                            </label>
                                        ))}
                                    </div>

                                    {/* Precio */}
                                    <div className="cart-column cart-price">
                                        <span className="cart-text">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>

                                    {/* Botón de eliminar */}
                                    <div className="cart-column cart-remove">
                                        <button
                                            className="btn btn-danger btn-remove"
                                            onClick={() => removeFromCart(item.product_id)}
                                        >
                                            Eliminar
                                        </button>
                                        {isMobile && (
                                            <CloseIcon onClick={() => removeFromCart(item.product_id)} className="cart-close-icon" style={{
                                                fontSize: 30,
                                                cursor: 'pointer'
                                            }} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-total">
                            <strong className="cart-total-title">Total</strong>
                            <span className="cart-total-price">${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="cart-link">
                            <Link to="/checkout" className="btn btn-success btn-purchase">
                                Comprar
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;
