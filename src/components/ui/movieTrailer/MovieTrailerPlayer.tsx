import ReactPlayer from 'react-player';
import { useFetchYoutube } from '../../../hooks/useFetchYoutube';
import { ClipLoader } from 'react-spinners';

// Props 타입 정의
interface MovieTrailerPlayerProps {
  movieTitle: string;
}

const MovieTrailerPlayer = ({ movieTitle }: MovieTrailerPlayerProps) => {
  const { trailerUrl, loading } = useFetchYoutube(movieTitle);

  return (
    <div className="player-wrapper" style={{ textAlign: 'center', padding: '20px' }}>
      {loading ? (
        <ClipLoader color="#3498db" size={100} />
      ) : trailerUrl ? (
        <ReactPlayer url={trailerUrl} controls width="100%" />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default MovieTrailerPlayer;
