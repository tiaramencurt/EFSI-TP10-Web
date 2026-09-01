import React from 'react';
import './ItemCard.css';

const ItemCard = ({
  item,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const { id, name, image, type, weight } = item;

  return (
    <div className="item-card">
      {image && <img src={image} alt={name} className="item-image" />}
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-detail"><strong>Tipo:</strong> {type}</p>
        <p className="item-detail"><strong>Peso:</strong> {weight}</p>
      </div>
      <div className="item-actions">
        {isFavorite ? (
          <button 
            className="btn btn-remove" 
            onClick={() => onRemoveFavorite && onRemoveFavorite(id)}
          >
            Quitar de favoritos
          </button>
        ) : (
          <button 
            className="btn btn-add" 
            onClick={() => onAddFavorite && onAddFavorite(item)}
          >
            Agregar a favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;