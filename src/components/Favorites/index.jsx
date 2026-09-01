import React from 'react';
import ItemCard from '../ItemCard';

const FavoritesComponent = ({ favorites, onRemoveFavorite }) => {
  if (!favorites || favorites.length === 0) {
    return <p className="no-results">No tienes elementos guardados en favoritos.</p>;
  }

  return (
    <div className="item-list-grid">
      {favorites.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavorite={true}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
};

export default FavoritesComponent;