import { getLastWeek } from '../../utils/date';
import CardList from '../../components/ui/card/CardList';
import Header from '../../components/ui/header/Header';
import SkeletonCard from '../../components/ui/card/skeleton/SkeletonCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export default function Home(): JSX.Element {
  const lastWeek = getLastWeek();
  const { loading,movieList } = useFetchMovies(lastWeek);

  return (
    <>
      <Header />
      {loading ? <SkeletonCard /> : <CardList movies={movieList} />}
    </>
  );
}
