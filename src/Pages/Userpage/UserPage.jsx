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
  ]);

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
  };

  return (
    <main className="userpage-main">
      <div className="userpage-header">
        <h1>Mi Página de Usuario</h1>
        <p>Actualiza tu información y consulta tus órdenes.</p>
      </div>

      <section className="userpage-section">
        <h2>Datos de Usuario</h2>
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
        </form>
      </section>

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

      <button className="userpage-update-btn" onClick={handleUpdate}>
        Actualizar Datos
      </button>
    </main>
  );
};

export default UserPage;