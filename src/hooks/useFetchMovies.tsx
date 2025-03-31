import axios from 'axios';
import { KMDB, KOBIS } from '../config';
import { useCallback, useEffect, useState } from 'react';
import { Movie, Actor } from '../components/ui/card/MovieCard.types';

export function useFetchMovies(lastWeek: string) {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `${KOBIS.BASE_URL}?key=${KOBIS.API_KEY}&targetDt=${lastWeek}`,
      );
      const movieList = response.data.boxOfficeResult.dailyBoxOfficeList;
      const detailedMovies = await Promise.all(
        movieList.map(async (movie: Movie) => {
          const detailResponse = await axios.get(
            `${KMDB.BASE_URL}?collection=kmdb_new2&detail=Y&title=${encodeURIComponent(
              movie.movieNm,
            )}&releaseDts=${movie.openDt}&ServiceKey=${KMDB.API_KEY}`,
          );
          const data = detailResponse.data?.Data[0]?.Result[0];
          const titleEng = data?.titleEng;
          const movieId = data?.DOCID;
          const image = data?.posters?.split('|')[0];
          const actorNm = data?.actors?.actor.map((actor: Actor) => actor.actorNm).slice(0, 10);
          const directorNm = data?.directors?.director[0].directorNm;
          const plot = data?.plots.plot[0].plotText;
          const rating = data?.rating;
          const runtime = data?.runtime;
          const genre = data?.genre;
          const stills = data?.stlls?.split('|');
          return {
            ...movie,
            titleEng,
            movieId,
            image,
            actorNm,
            directorNm,
            plot,
            rating,
            genre,
            runtime,
            stills,
          };
        }),
      );
      console.log(detailedMovies);
      setMovieList(detailedMovies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [lastWeek, setMovieList]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return { loading, movieList };
}
