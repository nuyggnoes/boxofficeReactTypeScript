import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import {YOUTUBE_API_KEY} from '../../../config';

// Props 타입 정의
interface MovieTrailerPlayerProps {
  movieTitle: string;
}

const MovieTrailerPlayer = ({ movieTitle }:MovieTrailerPlayerProps) => {
  const [trailerUrl, setTrailerUrl] = useState('');
    const API_KEY = YOUTUBE_API_KEY;
    console.log(API_KEY);

  useEffect(() => {
    if (movieTitle) {
      const fetchTrailer = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
              movieTitle + ' trailer'
            )}&key=${API_KEY}`
          );
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            setTrailerUrl(`https://www.youtube.com/watch?v=${videoId}`);
          }
        } catch (error) {
          console.error('Error fetching trailer:', error);
        }
      };
      fetchTrailer();
    }
  }, [movieTitle, API_KEY]);

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
