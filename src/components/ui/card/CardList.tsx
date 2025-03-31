import * as S from './MovieCard.styles';
import { Movie } from './MovieCard.types';
import Card from './MovieCard';

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
