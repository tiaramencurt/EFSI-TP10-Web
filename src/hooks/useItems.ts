import { useState, useEffect } from 'react';
import { Item } from '../types/item';
import { fetchItems } from '../services/api';

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return {
    items: filteredItems,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  };
};