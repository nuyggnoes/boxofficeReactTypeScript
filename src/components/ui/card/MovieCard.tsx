import { Global } from '@emotion/react';
import * as S from './MovieCard.styles';
import { Movie } from './MovieCard.types';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  movie: Movie;
};

export default function Card({ movie }: CardProps): JSX.Element {
  const navigate = useNavigate();
  const movePage = () => {
    navigate(`/detail?movie_id=${movie.movieId}`, { state: { movie } });
  };
  console.log(movie.image);

  return (
    <>
      <S.Card onClick={movePage}>
        <S.MovieImage src={movie.image} />
        <Global styles={S.globalStyles} />
        <S.MovieTitle className="movie-title">{movie.movieNm}</S.MovieTitle>
        <S.MovieRank className="movie-rank">{movie.rank}</S.MovieRank>
      </S.Card>
    </>
  );
}
