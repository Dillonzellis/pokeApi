// 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/'

// list of Pokemon
export interface PokemonList {
  name: string;
  url: string;
}
[];

export const getPokeList = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/'
  );
  if (!res) {
    throw new Error('failed to fetch');
  }
  const data = await res.json();
  return data.results;
};

// Pokemon Images
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

export const getSprite = (num: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
};

// Description
// `https://pokeapi.co/api/v2/pokemon-species/1`

export const getDesc = async (num: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
  if (!res) {
    throw new Error(`failed to fetch`);
  }
  const pokemon = await res.json();
  return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
};
