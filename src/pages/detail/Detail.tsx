import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import MovieTrailerPlayer from '../../components/ui/movieTrailer/MovieTrailerPlayer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MovieTitle from '../../components/ui/text/MovieTitle';
import MoviePlot from '../../components/ui/text/MoviePlot';
import MovieSummary from '../../components/ui/text/MovieSummary';
import RankCard from '../../components/ui/card/RankCard';

export default function Detail(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('movie_id');
  const movie = useSelector((state: RootState) =>
    state.movies.movieList.find((movie) => movie.movieId === movieId),
  );
  const Wrapper = styled.div`
    display: flex;
    margin: 70px auto;
    width: 800px;
    /* color: white; */
    flex-direction: column;
    /* background: linear-gradient(
      to bottom,
      rgba(100, 123, 105, 1) 20%,
      black 50%
    ); */
    border: 1px solid white;
    border-radius: 10px;
  `;
  const MainImg = styled.img`
    border-radius: 10px;
    height: 220px;
    width: 150px;
    position: absolute;
    right: 15px;
    top: -100px;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 25px;
    /* position: relative; */
    margin-top: 100px;
    padding: 25px;
  `;
  if (!movie) {
    return <div>Movie not found</div>;
  }
  console.log(movie);
  return (
    <>
      <Wrapper>
        {/* <div style={{ display: 'flex', flexDirection:"column", padding:'20px'}}>
          <MainTitleText>{movie.movieNm}</MainTitleText>
          {movie.titleEng}
          {movie.openDt.split('-')[0]}
        </div> */}
        <MovieTitle
          movieNm={movie.movieNm}
          titleEng={movie.titleEng}
          openYear={movie.openDt.split('-')[0]}
        />
        <MovieTrailerPlayer movieTitle={movie.movieNm} />
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '100px',
                alignItems: 'center',
              }}
            >
              <MovieSummary
                genre={movie.genre}
                directorNm={movie.directorNm}
                movieOpenDt={movie.openDt.replaceAll('-', '.')}
                nation={movie.nation}
                runtime={movie.runtime}
              />
            </div>
            <MainImg src={movie.image} />
          </div>
          <MoviePlot plot={movie.plot} />
          <RankCard audiAcc={movie.audiAcc} rank={String(movie.rank)} />
          <p>{movie.directorNm}</p>
          <p>{movie.rating}</p>
          {movie.actorNm.map((element: string, index: number) => (
            <div key={index}>
              <p>{element}</p>
            </div>
          ))}
          <div>
            {movie.stills.map((element: string, index: number) => (
              <img key={index} src={element} alt="" />
            ))}
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
