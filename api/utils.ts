// 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/'

export const getPokeList = async () => {
  try {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/'
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
