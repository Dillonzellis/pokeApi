import { getSprite } from '../../api/utils';

interface Props {
  pokeNum: string;
}

const querySprite = (num: string) => {
  return getSprite(num);
};

const Card = ({ pokeNum }: Props) => {
  return (
    <div className='text-white'>
      <img src={querySprite(pokeNum)} />
    </div>
  );
};

export default Card;
