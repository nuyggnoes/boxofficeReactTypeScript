import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import MovieTrailerPlayer from '../../components/ui/movieTrailer/MovieTrailerPlayer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MovieTitle from '../../components/ui/text/MovieTitle';
import MoviePlot from '../../components/ui/text/MoviePlot';
import MovieSummary from '../../components/ui/text/MovieSummary';
import Masonry from 'react-masonry-css';

const ActorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const ActorName = styled.span`
  background-color: #f7f6f4;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const StyledMasonry = styled(Masonry)`
  display: flex;
  gap: 1px;
  width: auto;
`;

const StillImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 70px auto;
  width: 800px;
  flex-direction: column;
  font-size: 1rem;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 700px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;
const MainImg = styled.img`
  border-radius: 10px;
  height: 220px;
  width: 150px;
  position: absolute;
  right: 15px;
  top: -100px;
  @media screen and (max-width: 480px) {
    right: calc(50vw - 100px);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  margin-top: 40px;
  padding: 25px;
  font-size: 16px;
  @media screen and (max-width: 480px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
const TitleWrapper = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MovieInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 40px;
`;

const SubTitle = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  margin-bottom: 1em;
`;

export default function Detail(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('movie_id');
  const movie = useSelector((state: RootState) =>
    state.movies.movieList.find((movie) => movie.movieId === movieId),
  );
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    480: 1,
  };
  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <MovieTitle
            movieNm={movie.movieNm}
            titleEng={movie.titleEng}
            openYear={movie.openDt}
            audiAcc={movie.audiAcc}
            rank={movie.rank}
          />
        </TitleWrapper>
        <Container>
          <MovieInfoRow>
            <div>
              <MovieSummary
                movieNm={movie.movieNm}
                titleEng={movie.titleEng}
                openYear={movie.openDt}
                audiAcc={movie.audiAcc}
                rank={movie.rank}
                genre={movie.genre}
                directorNm={movie.directorNm}
                movieOpenDt={movie.openDt}
                nation={movie.nation}
                runtime={movie.runtime}
                rating={movie.rating}
              />
            </div>
            <MainImg src={movie.image} />
          </MovieInfoRow>
          <MovieTrailerPlayer movieTitle={movie.movieNm} />
          <MoviePlot plot={movie.plot} />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}></div>

          <SubTitle>배우</SubTitle>
          <ActorList>
            {movie.actorNm.map((element: string, index: number) => (
              <ActorName key={index}>{element}</ActorName>
            ))}
          </ActorList>

          <SubTitle>
            스틸컷 <span style={{ color: 'brown' }}>{movie.stills.length}</span>
          </SubTitle>
          <StyledMasonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {movie.stills.map((url, i) => (
              <StillImage key={i} src={url} alt={`still-${i}`} />
            ))}
          </StyledMasonry>
        </Container>
      </Wrapper>
    </>
  );
}
