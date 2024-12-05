import React, { useState } from "react";
import "./UserPage.css";
import { Checkbox, Button, Box, Typography, TextField } from "@mui/material";
import "./foodAllergyForm.css";

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

    /*=============================== FOOD ALLERGY FORM SECTION*/

    const [alergias, setAlergias] = useState([]); // Estado de las alergias seleccionadas
    const [otherAllergy, setOtherAllergy] = useState(""); // Estado para manejar el valor de "Otro"

    const allergiesList = [
        "Cacahuates/Maní",
        "Pescado/Mariscos",
        "Huevos",
        "Nueces de árbol (almendras, pacanas, etc.)",
        "Productos de soya",
        "Leche",
        "Azúcar",
        "Champiñón/Hongo",
        "Gluten",
        "Sulfitos",
        "Mostaza",
        "Frutos rojos",
        "Ninguna",
        "Otro", // Opción "Otro"
    ];

    // Manejo de cambio de estado en los checkboxes
    const handleCheckboxChange = (allergy, isChecked) => {
        setAlergias((prev) => {
            if (allergy === "Otro") {
                // Si "Otro" es marcado o desmarcado
                if (isChecked) {
                    // Cuando "Otro" es seleccionado, lo agregamos a las alergias
                    return [...prev, "Otro"];
                } else {
                    // Si "Otro" es desmarcado, lo eliminamos
                    return prev.filter((item) => item !== "Otro");
                }
            } else {
                // Manejo de alergias específicas
                if (isChecked) {
                    return [...prev, allergy]; // Agregar la alergia seleccionada
                } else {
                    return prev.filter((item) => item !== allergy); // Eliminar la alergia desmarcada
                }
            }
        });
    };

    const handleOtherAllergyChange = (event) => {
        setOtherAllergy(event.target.value); // Guardamos lo que el usuario ingresa en "Otro"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar que al menos una alergia esté seleccionada
        if (alergias.length === 0) {
            alert("Por favor, seleccione al menos una alergia.");
            return;
        }

        // Validar que si se selecciona "Otro", el campo no esté vacío
        if (alergias.includes("Otro") && !otherAllergy.trim()) {
            alert("Por favor, especifique su alergia en el campo 'Otro'.");
            return;
        }

        // Concatenar la descripción de "Otro" si aplica
        const finalAlergias = alergias.includes("Otro")
            ? [...alergias.filter((a) => a !== "Otro"), `Otro: ${otherAllergy}`]
            : alergias;

        console.log("Alergias seleccionadas:", finalAlergias);
        alert("Formulario enviado con éxito.");

    };

    /*=============================== END FOOD ALLERGY FORM SECTION*/

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

            case "foodAllergyForm":
                return (
                    <section>
                        <div className="food-allergy-form">
                            <Typography variant="h1" align="center" fontWeight="bold">
                                Formulario de Alergias
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 5 }}>
                                <Typography
                                    className="food-allergy-form__section-center"
                                    variant="h3"
                                    fontWeight="bold"
                                >
                                    Seleccione los alimentos que le causan reacción
                                </Typography>
                                <br />

                                <Box component="table" className="food-allergy-form__checkbox-group">
                                    <thead>
                                        <tr>
                                            <th>Alimento</th>
                                            <th>Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allergiesList.map((allergy, index) => (
                                            <tr className="food-allergy-form__checkbox-row" key={index}>
                                                <td className="food-allergy-form__checkbox-cell">{allergy}</td>
                                                <td className="food-allergy-form__checkbox-cell">
                                                    <Checkbox
                                                        size="large"
                                                        checked={alergias.includes(allergy)} // Verificar si la alergia está seleccionada
                                                        onChange={(e) => handleCheckboxChange(allergy, e.target.checked)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}


                                        {alergias.includes("Otro") && (
                                            <tr className="food-allergy-form__checkbox-row">
                                                <td colSpan="2" style={{ textAlign: "center" }}>      {/* colSpan="2" para que ocupe ambas columnas */}
                                                    <TextField
                                                        className="food-allergy-form__textfield"
                                                        label="Especifique su alergia"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={otherAllergy}
                                                        onChange={handleOtherAllergyChange}
                                                        placeholder="Escriba la alergia..."
                                                        margin="normal"
                                                        inputProps={{ maxLength: 300 }} // Limitar a 300 caracteres

                                                    />
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>


                                </Box>



                                <Button
                                    className="food-allergy-form__button"
                                    type="submit"
                                    variant="contained"
                                >
                                    Enviar
                                </Button>
                            </Box>
                        </div>
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
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "foodAllergyForm" ? "userpage-active-btn" : ""
                            }`}
                        onClick={() => setCurrentSection("foodAllergyForm")}
                    >
                        Alergias
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
