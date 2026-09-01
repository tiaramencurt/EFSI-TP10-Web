import React from 'react';
import ItemCard from '../ItemCard';
import './ItemList.css';

const ItemList = ({
  items,
  isFavoriteCheck,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  if (items.length === 0) {
    return <p className="no-results">No encontramos resultados.</p>;
  }

  return (
    <div className="item-list-grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavorite={isFavoriteCheck(item.id)}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
};

export default ItemList;