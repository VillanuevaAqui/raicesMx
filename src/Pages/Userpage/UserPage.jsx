import React, { useState, useRef } from "react";
import "./UserPage.css";
import { Checkbox, Button, Box, Typography, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const UserPage = () => {
    const [userData, setUserData] = useState({
        name: "",
        address: "",
        phone: "",
        postalCode: "", // Nuevo campo para código postal
    });

    const [paymentData, setPaymentData] = useState({
        cardName: "",
        cardNumber1: "",
        cardNumber2: "",
        cardNumber3: "",
        cardNumber4: "",
        expirationDate: "",
        cvv: "",
    });

    const [orders, setOrders] = useState([
        { id: 1, date: "2024-11-01", total: 100 },
        { id: 2, date: "2024-11-15", total: 50 },
        { id: 3, date: "2024-11-15", total: 50 },
    ]);

    const [visaMastercard, setCards] = useState([
        {
            img: "/assets/userpage-visa.webp",
            tarjeta: "**** **** **** 1234",
            expirationDate: "11/30",
            nameCard: "Juanito Pérez"
        },
        {
            img: "/assets/userpage-visa.webp",
            tarjeta: "**** **** **** 5678",
            expirationDate: "05/25",
            nameCard: "Teresa la mala"
        },
        {
            img: "/assets/userpage-visa.webp",
            tarjeta: "**** **** **** 9012",
            expirationDate: "08/28",
            nameCard: "María la del barrio"
        }
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

    // Función para eliminar una tarjeta
    const handleDeleteCard = (index) => {
        setCards((prevCards) => prevCards.filter((_, i) => i !== index));
    };

    // Referencias para los campos de número de tarjeta
    const cardNumber2Ref = useRef(null);
    const cardNumber3Ref = useRef(null);
    const cardNumber4Ref = useRef(null);

    // Función para manejar la adición de tarjetas
    const handleAddCard = (e) => {
        e.preventDefault();
        const { cardName, cardNumber1, cardNumber2, cardNumber3, cardNumber4, expirationDate, cvv } = paymentData;

        if (!cardName || !cardNumber1 || !cardNumber2 || !cardNumber3 || !cardNumber4 || !expirationDate || !cvv) {
            alert("Por favor, completa todos los campos de la tarjeta.");
            return;
        }

        // Validar que cada bloque de número de tarjeta tenga 4 dígitos
        const cardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];
        for (let num of cardNumbers) {
            if (!/^\d{4}$/.test(num)) {
                alert("Cada bloque del número de tarjeta debe tener exactamente 4 dígitos.");
                return;
            }
        }

        // Validar formato básico de la expiración
        if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
            alert("La fecha de expiración debe tener el formato MM/AA.");
            return;
        }

        // Validar CVV
        if (!/^\d{3,4}$/.test(cvv)) {
            alert("El CVV debe tener entre 3 y 4 dígitos.");
            return;
        }

        // Validar código postal (asumiendo 5 dígitos)
        if (!/^\d{5}$/.test(userData.postalCode)) {
            alert("El código postal debe tener 5 dígitos.");
            return;
        }

        const fullCardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;

        setCards((prevCards) => [
            ...prevCards,
            {
                img: "/assets/userpage-visa.webp",
                tarjeta: `**** **** **** ${cardNumber4}`,
                expirationDate: expirationDate,
                nameCard: userData.name || "Usuario",
            },
        ]);

        // Resetear los campos de la tarjeta
        setPaymentData({
            cardName: "",
            cardNumber1: "",
            cardNumber2: "",
            cardNumber3: "",
            cardNumber4: "",
            expirationDate: "",
            cvv: "",
        });
    };

    const handleCardNumberChange = (e, field, nextRef) => {
        const { value } = e.target;
        if (!/^\d{0,4}$/.test(value)) {
            return;
        }

        setPaymentData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

        if (value.length === 4 && nextRef) {
            nextRef.current.focus();
        }
    };

    const handleExpirationChange = (e) => {
        let { value } = e.target;
        if (!/^\d{0,5}$/.test(value)) {
            return;
        }

        // Auto-insert '/' after entering two digits
        if (value.length === 2 && !value.includes('/')) {
            value = value + '/';
        }

        setPaymentData((prevData) => ({
            ...prevData,
            expirationDate: value,
        }));
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
                                        placeholder="Tu nombre completo"
                                        className="userpage-input"
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleUserChange}
                                        maxLength="50"
                                    />
                                </label>
                                <label>
                                    Dirección:
                                    <input
                                        placeholder="Tu dirección"
                                        className="userpage-input"
                                        type="text"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleUserChange}
                                        maxLength="100"
                                    />
                                </label>
                                <label>
                                    Teléfono:
                                    <input
                                        placeholder="Tu número de teléfono"
                                        className="userpage-input"
                                        type="text"
                                        name="phone"
                                        value={userData.phone}
                                        onChange={handleUserChange}
                                        maxLength="15"
                                    />
                                </label>
                                <label>
                                    Código Postal:
                                    <input
                                        placeholder="Tu código postal"
                                        className="userpage-input"
                                        type="text"
                                        name="postalCode"
                                        value={userData.postalCode}
                                        onChange={handleUserChange}
                                        maxLength="5"
                                    />
                                </label>
                            </div>
                            <Button type="submit" variant="contained" className="userpage-update-btn">
                                Actualizar Datos
                            </Button>
                        </form>
                    </section>
                );
            case "payment":
                return (
                    <section className="userpage-section">
                        <h2>Datos de Pago</h2>
                        <form onSubmit={handleAddCard}>
                            <div className="userpage-input-container">
                                <label>
                                    Nombre completo:
                                    <input
                                        placeholder="Ingresa tu nombre"
                                        className="userpage-input"
                                        type="text"
                                        name="cardName"
                                        value={paymentData.cardName}
                                        onChange={handlePaymentChange}
                                        maxLength="50"
                                    />
                                </label>
                                <label>
                                    Número de tarjeta:
                                    <div className="userpage-card-number-container">
                                        <input
                                            placeholder="1234"
                                            className="userpage-input userpage-card-number-input"
                                            type="text"
                                            name="cardNumber1"
                                            value={paymentData.cardNumber1}
                                            onChange={(e) => handleCardNumberChange(e, 'cardNumber1', cardNumber2Ref)}
                                            maxLength="4"
                                        />
                                        <input
                                            placeholder="5678"
                                            className="userpage-input userpage-card-number-input"
                                            type="text"
                                            name="cardNumber2"
                                            value={paymentData.cardNumber2}
                                            onChange={(e) => handleCardNumberChange(e, 'cardNumber2', cardNumber3Ref)}
                                            maxLength="4"
                                            ref={cardNumber2Ref}
                                        />
                                        <input
                                            placeholder="9012"
                                            className="userpage-input userpage-card-number-input"
                                            type="text"
                                            name="cardNumber3"
                                            value={paymentData.cardNumber3}
                                            onChange={(e) => handleCardNumberChange(e, 'cardNumber3', cardNumber4Ref)}
                                            maxLength="4"
                                            ref={cardNumber3Ref}
                                        />
                                        <input
                                            placeholder="3456"
                                            className="userpage-input userpage-card-number-input"
                                            type="text"
                                            name="cardNumber4"
                                            value={paymentData.cardNumber4}
                                            onChange={(e) => handleCardNumberChange(e, 'cardNumber4', null)}
                                            maxLength="4"
                                            ref={cardNumber4Ref}
                                        />
                                    </div>
                                </label>
                                <div className="userpage-payment-row">
                                    <label>
                                        Fecha de expiración:
                                        <input
                                            placeholder="MM/AA"
                                            className="userpage-input userpage-expiration-input"
                                            type="text"
                                            name="expirationDate"
                                            value={paymentData.expirationDate}
                                            onChange={handleExpirationChange}
                                            maxLength="5"
                                        />
                                    </label>
                                    <label>
                                        CVV:
                                        <input
                                            placeholder="123"
                                            className="userpage-input userpage-cvv-input"
                                            type="text"
                                            name="cvv"
                                            value={paymentData.cvv}
                                            onChange={handlePaymentChange}
                                            maxLength="4"
                                        />
                                    </label>
                                </div>
                            </div>
                            <Button type="submit" variant="contained" className="userpage-update-btn">
                                Agregar Tarjeta
                            </Button>
                        </form>
                        <div className="userpage-cards-container">
                            {visaMastercard.map((cardInfo, index) => (
                                <div key={index} className="userpage-card">
                                    <span className="userpage-logo">
                                        <svg viewBox="0 0 256 83" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient
                                                    y2="100%"
                                                    y1="-2.006%"
                                                    x2="54.877%"
                                                    x1="45.974%"
                                                    id="logosVisa0"
                                                >
                                                    <stop stopColor="#222357" offset="0%" />
                                                    <stop stopColor="#254AA5" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                transform="matrix(1 0 0 -1 0 82.668)"
                                                d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                                                fill="url(#logosVisa0)"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="userpage-remove" onClick={() => handleDeleteCard(index)}>
                                        <DeleteIcon />
                                    </span>
                                    <span className="userpage-number">{cardInfo.tarjeta}</span>
                                    <span className="userpage-expirationDate">Exp: {cardInfo.expirationDate}</span>
                                    <span className="userpage-owner">{cardInfo.nameCard}</span>
                                </div>
                            ))}
                        </div>
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
                        <div className="userpage-food-allergy-form">
                            <Typography variant="h1" align="center" fontWeight="bold">
                                Formulario de Alergias
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 5 }}>
                                <Typography
                                    className="userpage-food-allergy-form__section-center"
                                    variant="h3"
                                    fontWeight="bold"
                                >
                                    Seleccione los alimentos que le causan reacción
                                </Typography>
                                <br />

                                <Box component="table" className="userpage-food-allergy-form__checkbox-group">
                                    <thead>
                                        <tr>
                                            <th>Alimento</th>
                                            <th>Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allergiesList.map((allergy, index) => (
                                            <tr className="userpage-food-allergy-form__checkbox-row" key={index}>
                                                <td className="userpage-food-allergy-form__checkbox-cell">{allergy}</td>
                                                <td className="userpage-food-allergy-form__checkbox-cell">
                                                    <Checkbox
                                                        size="large"
                                                        checked={alergias.includes(allergy)} // Verificar si la alergia está seleccionada
                                                        onChange={(e) => handleCheckboxChange(allergy, e.target.checked)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}

                                        {alergias.includes("Otro") && (
                                            <tr className="userpage-food-allergy-form__checkbox-row">
                                                <td colSpan="2" style={{ textAlign: "center" }}>
                                                    <TextField
                                                        className="userpage-food-allergy-form__textfield"
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
                                    className="userpage-food-allergy-form__button"
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
                        className={`userpage-sidebar-btn ${currentSection === "personal" ? "userpage-active-btn" : ""}`}
                        onClick={() => setCurrentSection("personal")}
                    >
                        Información Personal
                    </button>
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "payment" ? "userpage-active-btn" : ""}`}
                        onClick={() => setCurrentSection("payment")}
                    >
                        Método de Pago
                    </button>
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "orders" ? "userpage-active-btn" : ""}`}
                        onClick={() => setCurrentSection("orders")}
                    >
                        Mis Órdenes
                    </button>
                    <button
                        className={`userpage-sidebar-btn ${currentSection === "foodAllergyForm" ? "userpage-active-btn" : ""}`}
                        onClick={() => setCurrentSection("foodAllergyForm")}
                    >
                        Alergias
                    </button>
                </aside>

                {/* Área de contenido */}
                <div className="userpage-content">
                    {renderSection()}
                </div>
            </div>
        </main>
    );
};

export default UserPage;