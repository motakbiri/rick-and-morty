

const baseUrl = import.meta.env.VITE_API_BASE


export const fetchCharacters = async(page:number) =>  fetch(baseUrl + "character?page="+ page).then((res) => res.json())
  