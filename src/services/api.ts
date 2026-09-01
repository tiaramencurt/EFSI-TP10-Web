import axios from 'axios';
import { Item } from '../types/item';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchItems = async (): Promise<Item[]> => {
  // Obtenemos los primeros 20 pokémon
  const response = await axios.get(`${BASE_URL}/pokemon?limit=20`);
  const results = response.data.results;

  // Obtenemos el detalle de cada elemento para extraer imagen, tipo y peso
  const itemsPromises = results.map(async (pokemon: { url: string }) => {
    const detailResponse = await axios.get(pokemon.url);
    const data = detailResponse.data;

    const item: Item = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default || '',
      type: data.types.map((t: any) => t.type.name).join(', '),
      weight: data.weight,
    };
    return item;
  });

  return Promise.all(itemsPromises);
};