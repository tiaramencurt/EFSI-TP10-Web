import React from 'react';
import FavoritesComponent from '../components/Favorites/index';

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <main className="main-content">
      <FavoritesComponent
        favorites={favorites}
        onRemoveFavorite={onRemoveFavorite}
      />
    </main>
  );
};

export default Favorites;