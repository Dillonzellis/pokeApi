interface Props {
  pokeDesc: string;
}

const Desc = ({ pokeDesc }: Props) => {
  return <div className='text-white max-w-prose'>{pokeDesc}</div>;
};

export default Desc;
