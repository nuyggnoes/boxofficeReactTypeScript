import * as S from './Card.styles';
import { Movie } from './Card.types';
import Card from './Card';

type CardListProps = {
  movies: Movie[];
};

export default function CardList({ movies }: CardListProps): JSX.Element {
  return (
    <>
      <S.GridWrapper>
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </S.GridWrapper>
    </>
  );
}
