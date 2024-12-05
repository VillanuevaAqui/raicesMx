import React, { useState } from "react";
import { Checkbox, Button, Box, Typography, TextField } from "@mui/material";
import "./foodAllergyForm.css";

const FoodAllergyForm = () => {
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

  return (
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
  );
};

export default FoodAllergyForm;

