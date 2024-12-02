import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import MovieTrailerPlayer from '../../components/ui/movieTrailer/MovieTrailerPlayer';

const MainImage = styled.img`
  height: 440px;
  width: 307px;
  border-radius: 8px;
`;

export default function Detail(): JSX.Element {
  const location = useLocation();
  const { movie } = location.state || {};
  console.log(movie);
  const images = movie.stills.map((url: string) => ({ url }));
  console.log(images);
  const movieTitle = `${movie.movieNm} trailer`
  console.log('===================');
  console.log(movieTitle);
  console.log(encodeURIComponent(movieTitle));
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle)}+trailer`;
  const Container = styled.div`
    display: flex;
    margin: 70px auto;
    width: 800px;
    color: white;
    background: linear-gradient(
      to bottom,
      rgba(0, 123, 255, 0.5) 30%,
      white 50%
    );
    border-radius: 10px;
  `;
  const MainImg = styled.img`
    border-radius: 10px;
    height: 440px;
    width: 307px;
  `;
  return (
    <>
      <Container>
        <MainImg src={movie.image} />
        <div>
          <h1>{movie.movieNm}</h1>
          {movie.openDt}
          <p>{movie.runtime}</p>
          <div>
            <MovieTrailerPlayer movieTitle={ movie.movieNm} />
    </div>
          <p style={{ color: 'black' }}>{movie.directorNm}</p>
          <p style={{ color: 'black' }}>{movie.rating}</p>
          <h5 style={{ color: 'black' }}>{movie.plot}</h5>
          {movie.actorNm.map((element: string, index: number) => (
            <p key={index}>{element}</p>
          ))}
          {movie.stills.map((element: string, index: number) => (
            <img key={index} src={element} />
          ))}
        </div>
      </Container>
    </>
  );
}
