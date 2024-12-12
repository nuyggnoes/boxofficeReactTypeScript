import { getYesterday } from '../../utils/date';
import CardList from '../../components/ui/card/CardList';
import Header from '../../components/ui/header/Header';
import SkeletonCard from '../../components/ui/card/skeleton/SkeletonCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { fetchMovies } from '../../redux/movieSlice';
import { useAppDispatch } from '../../redux/hook';
import ActorSearch from '../../hooks/useFetchActorImg';

export default function Home(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { movieList, loading, error } = useSelector((state: RootState) => state.movies);
  // const { loading,movieList } = useFetchMovies(getYesterday());

  useEffect(() => {
    if (movieList.length === 0) {
      dispatch(fetchMovies(getYesterday()));
    }
  }, [dispatch, movieList]);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      {loading ? <SkeletonCard /> : <CardList movies={movieList} />}
    </>
  );
}
