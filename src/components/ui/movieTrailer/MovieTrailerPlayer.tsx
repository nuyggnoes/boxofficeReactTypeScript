import ReactPlayer from 'react-player';
import { useFetchYoutube } from '../../../hooks/useFetchYoutube';

// Props 타입 정의
interface MovieTrailerPlayerProps {
  movieTitle: string;
}

const MovieTrailerPlayer = ({ movieTitle }:MovieTrailerPlayerProps) => {
  const { trailerUrl } = useFetchYoutube(movieTitle);

  return (
    <div className="player-wrapper">
      {trailerUrl ? (
        <ReactPlayer url={trailerUrl} controls width="100%" height="100%" />
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default MovieTrailerPlayer;
