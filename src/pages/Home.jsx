import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import { fetchItems } from '../services/api';

const Home = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchItems();
        setItems(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <main className="main-content">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {loading && <p className="status-message">Cargando información...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && (
        <ItemList
          items={filteredItems}
          isFavoriteCheck={isFavorite}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      )}
    </main>
  );
};

export default Home;