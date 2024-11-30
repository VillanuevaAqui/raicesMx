import React from 'react';
import PropTypes from 'prop-types';
import './TitleCard.css';

// Componente funcional que recibe título, subtítulo y una imagen opcional
const TitleCard = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="title-card">
      {/* Contenedor principal del contenido de la tarjeta */}
      <div className="title-card-content">
        {/* Muestra la imagen si se proporciona la propiedad imageSrc */}
        {imageSrc && (
          <div className="title-card-image">
            <img src={imageSrc} alt={title} />
          </div>
        )}
        {/* Contenedor para el texto de la tarjeta */}
        <div className="title-card-text">
          <h1 className="title">{title}</h1>
          {/* Muestra el subtítulo si está definido */}
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

// Define las propiedades esperadas del componente
TitleCard.propTypes = {
  title: PropTypes.string.isRequired, // El título es obligatorio
  subtitle: PropTypes.string,         // El subtítulo es opcional
  imageSrc: PropTypes.string,         // La imagen es opcional
};

// Valores por defecto para propiedades opcionales
TitleCard.defaultProps = {
  subtitle: '',
  imageSrc: null,
};

export default TitleCard;
