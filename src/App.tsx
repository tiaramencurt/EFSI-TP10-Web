import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import Favorites from './components/Favorites';
import { useItems } from './hooks/useItems';
import { useFavorites } from './hooks/useFavorites';
import './App.css';

const Home: React.FC<{
  items: any[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isFavorite: (id: number) => boolean;
  addFavorite: (item: any) => void;
  removeFavorite: (id: number) => void;
}> = ({
  items,
  loading,
  error,
  searchQuery,
  setSearchQuery,
  isFavorite,
  addFavorite,
  removeFavorite,
}) => {
  return (
    <main className="main-content">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      {loading && <p className="status-message">Cargando información...</p>}
      {error && <p className="status-message error">{error}</p>}
      
      {!loading && !error && (
        <ItemList
          items={items}
          isFavoriteCheck={isFavorite}
          onAddFavorite={addFavorite}
          onRemoveFavorite={removeFavorite}
        />
      )}
    </main>
  );
};

const App: React.FC = () => {
  const { items, loading, error, searchQuery, setSearchQuery } = useItems();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                loading={loading}
                error={error}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isFavorite={isFavorite}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <main className="main-content">
                <Favorites
                  favorites={favorites}
                  onRemoveFavorite={removeFavorite}
                />
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;