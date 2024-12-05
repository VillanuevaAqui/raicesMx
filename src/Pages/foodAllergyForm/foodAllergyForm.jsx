import React, { useState } from "react";
import "./foodAllergyForm.css";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

const FoodAllergyForm = () => {
  const [contactMethod, setContactMethod] = useState("");
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const allergiesList = [
    { name: "Cacahuates/Maní", risk: ["Bajo", "Alto"] },
    { name: "Pescado/Mariscos", risk: ["Bajo", "Alto"] },
    { name: "Huevos", risk: ["Bajo", "Alto"] },
    { name: "Nueces de árbol (almendras, pacanas, etc.)", risk: ["Bajo", "Alto"] },
    { name: "Productos de soya", risk: ["Bajo", "Alto"] },
    { name: "Leche", risk: ["Bajo", "Alto"] },
    { name: "Azúcar", risk: ["Bajo", "Alto"] },
    { name: "Champiñón/Hongo", risk: ["Bajo", "Alto"] },
    { name: "Gluten", risk: ["Bajo", "Alto"] },
    { name: "Sulfitos", risk: ["Bajo", "Alto"] },
    { name: "Mostaza", risk: ["Bajo", "Alto"] },
    { name: "Frutas cítricas", risk: ["Bajo", "Alto"] },
    { name: "Tomates", risk: ["Bajo", "Alto"] },
    { name: "Frutos rojos", risk: ["Bajo", "Alto"] },
    { name: "Chocolate", risk: ["Bajo", "Alto"] },
    { name: "Otro", risk: ["Bajo", "Alto"] },
  ];

  const handleCheckboxChange = (allergyName, riskLevel) => {
    setSelectedAllergies((prev) => {
      const exists = prev.find(
        (item) => item.name === allergyName && item.risk === riskLevel
      );
      if (exists) {
        return prev.filter(
          (item) => !(item.name === allergyName && item.risk === riskLevel)
        );
      } else {
        return [...prev, { name: allergyName, risk: riskLevel }];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      contactMethod,
      contactInfo,
      selectedAllergies,
      additionalNotes,
    });
    alert("Formulario enviado con éxito.");
  };

  return (
    <div className="food-allergy-form">
      <Typography variant="h4" align="center" fontWeight="bold">
        Formulario de Alergias
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 4 }}>
        {/* Nombre completo */}
        <Typography variant="h6" fontWeight="bold" align="left">
          Nombre completo
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          placeholder="Escriba su nombre completo"
        />

        {/* Contacto */}
        <Typography variant="h6" fontWeight="bold" align="center" sx={{ marginTop: 2 }}>
          Si necesitamos comunicarnos con usted para más preguntas sobre sus
          alergias, ¿cómo lo hacemos?
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={contactMethod === "Telefono"}
                onChange={() => setContactMethod("Telefono")}
              />
            }
            label="Número de teléfono"
          />
          {contactMethod === "Telefono" && (
            <TextField
              variant="outlined"
              placeholder="Ingrese su número de teléfono"
              onChange={(e) => setContactInfo(e.target.value)}
              sx={{ marginTop: 1 }}
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={contactMethod === "Correo"}
                onChange={() => setContactMethod("Correo")}
              />
            }
            label="Correo electrónico"
          />
          {contactMethod === "Correo" && (
            <TextField
              variant="outlined"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setContactInfo(e.target.value)}
              sx={{ marginTop: 1 }}
            />
          )}
        </Box>

        {/* Historia y estado actual */}
        <Typography variant="h6" fontWeight="bold" align="center" sx={{ marginTop: 4 }}>
          Historia y estado actual
        </Typography>
        <Typography variant="h6" fontWeight="bold" align="left">
          Selecciona los alimentos que le causan una reacción alérgica
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ marginTop: 2 }}>
          {allergiesList.map((allergy) => (
            <Box key={allergy.name} display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
              <Typography sx={{ marginRight: 2 }}>{allergy.name}</Typography>
              {allergy.risk.map((risk) => (
                <FormControlLabel
                  key={`${allergy.name}-${risk}`}
                  control={
                    <Checkbox
                      onChange={() => handleCheckboxChange(allergy.name, risk)}
                    />
                  }
                  label={risk}
                />
              ))}
            </Box>
          ))}
        </Box>

        {/* Notas adicionales */}
        <Typography variant="h6" fontWeight="bold" align="left" sx={{ marginTop: 4 }}>
          Agrega las notas que quieras añadir
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Escribe aquí tus notas..."
          onChange={(e) => setAdditionalNotes(e.target.value)}
          sx={{ marginTop: 2 }}
        />

        {/* Botón enviar */}
        <Box display="flex" justifyContent="center" sx={{ marginTop: 4 }}>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default FoodAllergyForm;
