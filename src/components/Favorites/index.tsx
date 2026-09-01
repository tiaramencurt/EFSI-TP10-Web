import React from 'react';
import { Item } from '../../types/item';
import ItemCard from '../ItemCard';
import './Favorites.css';

interface FavoritesProps {
  favorites: Item[];
  onRemoveFavorite: (id: number) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">Aún no has agregado ningún elemento a favoritos.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Favorites;