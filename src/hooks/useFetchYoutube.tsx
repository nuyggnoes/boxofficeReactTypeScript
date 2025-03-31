import axios from 'axios';
import { useEffect, useState } from 'react';
import { YOUTUBE } from '../config';

export const useFetchYoutube = (movieTitle: string) => {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const API_KEY = YOUTUBE.API_KEY;

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const cachedUrl = localStorage.getItem(movieTitle);
        if (cachedUrl) {
          setTrailerUrl(cachedUrl);
          return { trailerUrl };
        }
        const response = await axios.get(
          `${YOUTUBE.BASE_URL}${encodeURIComponent(movieTitle + ' trailer')}&key=${API_KEY}`,
        );
        const videoId = response?.data?.items[0].id.videoId;
        const url = `${YOUTUBE.WATCH_URL}${videoId}`;
        localStorage.setItem(movieTitle, url);
        setTrailerUrl(url);
      } catch (error) {
        console.error('Error fetching trailer: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrailer();
  }, [movieTitle, API_KEY, trailerUrl]);
  return { trailerUrl, loading };
};
