// 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/'

// list of Pokemon

export interface PokemonList {
  name: string;
  url: string;
}
[];

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

// Pokemon Images
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// export interface Sprites {
//   num: string;
// }

export const getSprite = (num: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
};
