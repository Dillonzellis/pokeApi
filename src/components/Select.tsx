import { useEffect, useState } from 'react';
import { getPokeList } from '../../api/utils';

interface Pokemon {
  name: string;
  url: string;
}

const Select = () => {
  const [pokeName, setPokeName] = useState<Pokemon[]>([]);

  useEffect(() => {
    const names = async () => {
      const data = await getPokeList();
      setPokeName(data);
    };
    names();
  }, []);

  return (
    <select className='w-52 rounded-sm text-xl'>
      {pokeName.map((pokemon, idx) => (
        <option key={idx} value={pokemon.name}>
          {pokemon.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
