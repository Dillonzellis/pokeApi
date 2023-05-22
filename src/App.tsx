import { useEffect, useState } from 'react';
import { PokemonList, getDesc, getPokeList } from '../api/utils';

import Card from './components/Card';
import Desc from './components/Desc';

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

const App = () => {
  const [pokeList, setPokeList] = useState<PokemonList[]>([]);
  const [pokeIdx, setPokeIdx] = useState('1');
  const [pokeDesc, setPokeDesc] = useState('');

  useEffect(() => {
    const getNames = async () => {
      const data = await getPokeList();
      setPokeList(data);
    };
    getNames();
  }, []);

  const updateDesc = async (e: SelectEvent) => {
    const desc = await getDesc(e.target.value);
    setPokeDesc(desc);
  };

  const updatePoke = (e: SelectEvent) => {
    setPokeIdx(e.target.value);
    updateDesc(e);
  };

  return (
    <main className='bg-slate-900 h-screen flex flex-col items-center justify-center gap-8'>
      <div className='text-white'>yeppers</div>
      <select onChange={updatePoke}>
        {pokeList.map((pokemon, idx) => (
          <option key={idx} value={idx + 1}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <Card pokeNum={pokeIdx} />
      <Desc pokeDesc={pokeDesc} />
    </main>
  );
};

export default App;
