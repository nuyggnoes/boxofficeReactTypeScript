import { useCallback, useEffect, useState } from 'react';
import { getLastWeek } from '../../utils/date';
import axios from 'axios';
import CardList from '../../components/ui/card/CardList';
import Header from '../../components/ui/header/Header';
import { Movie, Actor } from '../../components/ui/card/Card.types';
import SkeletonCard from '../../components/ui/card/skeleton/SkeletonCard';

const BASE_URL =
  'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json';
const ACCESS_KEY = '4d2787f3024d41c9d3d314b5656f1dfe';
const BASE_URL2 =
  'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
const SECRET_KEY = '38AY338Z65T9K763T3AZ';

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const lastWeek = getLastWeek();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${ACCESS_KEY}&targetDt=${lastWeek}`,
      );
      const movieList = response.data.boxOfficeResult.weeklyBoxOfficeList;
      const detailedMovies = await Promise.all(
        movieList.map(async (movie: Movie) => {
          const detailResponse = await axios.get(
            `${BASE_URL2}?collection=kmdb_new2&detail=Y&title=${encodeURIComponent(
              movie.movieNm,
            )}&releaseDts=${movie.openDt}&ServiceKey=${SECRET_KEY}`,
          );
          const data = detailResponse.data?.Data[0]?.Result[0];
          const movieId = data?.DOCID;
          const image = data?.posters?.split('|')[0];
          const actorNm = data?.actors?.actor
            .map((actor: Actor) => actor.actorNm)
            .slice(0, 10);
          const directorNm = data?.directors?.director[0].directorNm;
          const plot = data?.plots.plot[0].plotText;
          const rating = data?.rating;
          const runtime = data?.runtime;
          const stills = data?.stlls?.split('|');
          return {
            ...movie,
            movieId,
            image,
            actorNm,
            directorNm,
            plot,
            rating,
            runtime,
            stills,
          };
        }),
      );
      setMovieList(detailedMovies);
      console.log('complete');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [lastWeek, setMovieList]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      {loading ? <SkeletonCard /> : <CardList movies={movieList} />}
    </>
  );
}
