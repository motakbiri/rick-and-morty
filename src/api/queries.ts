const baseUrl =
  import.meta.env.VITE_API_BASE || 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async (page: number) =>
  fetch(baseUrl + 'character?page=' + page).then((res) => res.json());
