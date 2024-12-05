import React, { useState } from "react";
import "./UserPage.css";

const UserPage = () => {
    const [userData, setUserData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
    });

    const [orders, setOrders] = useState([
        { id: 1, date: "2024-11-01", total: 100 },
        { id: 2, date: "2024-11-15", total: 50 },
        { id: 3, date: "2024-11-15", total: 50 },
    ]);

    const [visamastercard, setCards] = useState([
        { imagen: 1, tarjeta: "**** **** **** 1234", cvv: "11/30", nameCard: "Juanito Pérez" },
        { imagen: 2, tarjeta: "**** **** **** 5678", cvv: "05/25", nameCard: "Teresa la mala" },
        { imagen: 1, tarjeta: "**** **** **** 9012", cvv: "08/28", nameCard: "María la del barrio" }
    ]);

    const [currentSection, setCurrentSection] = useState("personal");

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Datos actualizados:", { userData, paymentData });
        // Aquí puedes agregar la lógica para actualizar los datos en el backend
    };

    const renderSection = () => {
        switch (currentSection) {
            case "personal":
                return (
                    <section className="userpage-section">
                        <h2>Mis datos</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="userpage-input-container">
                                <label>
                                    Nombre:
                                    <input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleUserChange}
                                        placeholder="Tu nombre completo"
                                    />
                                </label>
                                <label>
                                    Dirección:
                                    <input
                                        type="text"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleUserChange}
                                        placeholder="Tu dirección"
                                    />
                                </label>
                                <label>
                                    Teléfono:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={userData.phone}
                                        onChange={handleUserChange}
                                        placeholder="Tu número de teléfono"
                                    />
                                </label>
                            </div>
                        </form>
                    </section>
                );
            case "payment":
                return (
                    <section className="userpage-section">
                        <h2>Datos de Pago</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="userpage-input-container">
                                <label>
                                    Número de tarjeta:
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={paymentData.cardNumber}
                                        onChange={handlePaymentChange}
                                        placeholder="Número de tarjeta"
                                    />
                                </label>
                                <label>
                                    Fecha de expiración:
                                    <input
                                        type="text"
                                        name="expirationDate"
                                        value={paymentData.expirationDate}
                                        onChange={handlePaymentChange}
                                        placeholder="MM/AA"
                                    />
                                </label>
                                <label>
                                    CVV:
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={paymentData.cvv}
                                        onChange={handlePaymentChange}
                                        placeholder="Código CVV"
                                    />
                                </label>
                            </div>
                            <div className="userpage-paymentCardInfo">
                                <h3 className="userpage-paymentCardInfoh3">Tarjetas agregadas</h3>
                                <div className="userpage-paymentCards">
                                    <ul>
                                        {visamastercard.map((cardInfo) => (
                                            <li key={visamastercard.imagen} className="userpage-cardInfoContainer">
                                                <div className="userpage-cardInfoSaved">
                                                    <p>{visamastercard.imagen}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                            </div>
                        </form>
                    </section>
                );
                <div>

                </div>
            case "orders":
                return (
                    <section className="userpage-section">
                        <h2>Mis Órdenes</h2>
                        <ul className="userpage-orders-list">
                            {orders.map((order) => (
                                <li key={order.id} className="userpage-order-item">
                                    <div className="userpage-order-details">
                                        <strong>Orden #{order.id}</strong>
                                        <p>Fecha: {order.date}</p>
                                        <p>Total: ${order.total}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <main className="userpage-main">
            <div className="userpage-header">
                <h1>Mis Raíces</h1>
                <p>Actualiza tu información y consulta tus órdenes.</p>
            </div>

            <div className="userpage-container">
                {/* Barra lateral */}
                <aside className="userpage-sidebar">
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "personal" ? "userpage-active-btn" : ""
                            }`}
                        onClick={() => setCurrentSection("personal")}
                    >
                        Información Personal
                    </button>
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "payment" ? "userpage-active-btn" : ""
                            }`}
                        onClick={() => setCurrentSection("payment")}
                    >
                        Método de Pago
                    </button>
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "orders" ? "userpage-active-btn" : ""
                            }`}
                        onClick={() => setCurrentSection("orders")}
                    >
                        Mis Órdenes
                    </button>
                </aside>

                {/* Área de contenido */}
                <div className="userpage-content">
                    {renderSection()}
                    {currentSection !== "orders" && (
                        <button className="userpage-update-btn" onClick={handleUpdate}>
                            Actualizar Datos
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
};

export default UserPage;
