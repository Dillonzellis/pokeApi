import { useEffect, useState } from 'react';
import { PokemonList, getPokeList, getSprite } from '../api/utils';

import Card from './components/Card';

const App = () => {
  const [pokeList, setPokeList] = useState<PokemonList[]>([]);
  const [pokeIdx, setPokeIdx] = useState('');

  useEffect(() => {
    const getNames = async () => {
      const data = await getPokeList();
      setPokeList(data);
    };
    getNames();
  }, []);

  return (
    <main className='bg-slate-900 h-screen flex flex-col items-center justify-center gap-8'>
      <div className='text-white'>yeppers</div>
      <select
        onChange={(e) => {
          setPokeIdx(e.target.value);
        }}>
        {pokeList.map((pokemon, idx) => (
          <option key={idx} value={idx + 1}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <Card pokeNum={pokeIdx} />
    </main>
  );
};

export default App;
