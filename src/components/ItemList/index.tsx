import React from 'react';
import type { Item } from '../../types/item';
import ItemCard from '../ItemCard';
import './ItemList.css';

interface ItemListProps {
  items: Item[];
  isFavoriteCheck: (id: number) => boolean;
  onAddFavorite: (item: Item) => void;
  onRemoveFavorite: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({
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