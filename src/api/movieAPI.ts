import axios from "axios";
import { KOBIS, KMDB } from "../config";
import { Actor, Movie } from "../components/ui/card/MovieCard.types";
import { KMDBData } from "./KMDBData";

export async function fetchBoxOfficeList(date: string) {
    console.log('📦', process.env.REACT_APP_YOUTUBE_API_KEY);

    const response = await axios.get(
        `${KOBIS.BASE_URL}?key=${KOBIS.API_KEY}&targetDt=${date}`,
    );
    return response.data.boxOfficeResult.dailyBoxOfficeList;
}

export async function fetchMovieDetail(movie: Movie):Promise<Movie> {
    try {
        const res = await axios.get<KMDBData>(
            `${KMDB.BASE_URL}?collection=kmdb_new2&detail=Y&title=${encodeURIComponent(
            movie.movieNm
            )}&releaseDts=${movie.openDt}&ServiceKey=${KMDB.API_KEY}`
        );
        console.log(res);
        const result = res.data?.Data?.[0]?.Result?.[0];
        
    
        return {
            ...movie,
            titleEng: result.titleEng ?? '',
            movieId: result.DOCID ?? '',
            image: result.posters?.split('|')[0] ?? '',
            actorNm: result.actors.actor.map((a: Actor) => a.actorNm).slice(0, 10) ?? [],
            directorNm: result.directors.director?.[0]?.directorNm ?? '',
            plot: result.plots.plot?.[0]?.plotText ?? '',
            rating: result.rating ?? '',
            runtime: result.runtime ?? '',
            stills: result.stlls?.split('|') ?? [],
            genre: result.genre ?? '',
            nation: result.nation ?? '',
        };
    } catch (e) {
        console.error(`Failed to fetch detail for ${movie.movieNm}`, e);
        return movie;
    }
}