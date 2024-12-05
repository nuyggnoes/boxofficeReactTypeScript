import axios from "axios";
import { useEffect, useState } from "react"
import { YOUTUBE } from "../config";

export const useFetchYoutube = (movieTitle:string) => {
    const [trailerUrl, setTrailerUrl] = useState('');
    const API_KEY = YOUTUBE.API_KEY;

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await axios.get(`${YOUTUBE.BASE_URL}${encodeURIComponent(
                    movieTitle + ' trailer'
                )}&key=${API_KEY}`);
                console.log("====response=====");
                console.log(response);
                console.log("====response=====");
                const videoId = response?.data?.items[0].id.videoId;
                setTrailerUrl(`${YOUTUBE.WATCH_URL}${videoId}`);
            } catch (error) {
                console.error('Error fetching trailer: ', error);
            }
        };
        fetchTrailer();
    }, [movieTitle, API_KEY]);
    return { trailerUrl };
}