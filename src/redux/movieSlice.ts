import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { KMDB, KOBIS } from "../config";
import { Actor, Movie } from "../components/ui/card/Card.types";

interface MovieState{
    movieList: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    movieList: [],
    loading: false,
    error: null,
};

// 비동기 API 호출
// 비동기 액션 생성자
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (lastWeek: string, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${KOBIS.BASE_URL}?key=${KOBIS.API_KEY}&targetDt=${lastWeek}`,
        );
        const movieList = response.data.boxOfficeResult.dailyBoxOfficeList;

        const detailedMovies = await Promise.all(
          movieList.map(async (movie: Movie) => {
            const detailResponse = await axios.get(
              `${KMDB.BASE_URL}?collection=kmdb_new2&detail=Y&title=${encodeURIComponent(
                movie.movieNm,
              )}&releaseDts=${movie.openDt}&ServiceKey=${KMDB.API_KEY}`,
            );
            const data = detailResponse.data?.Data[0]?.Result[0];
            console.log(data);
  
            return {
              ...movie,
              titleEng: data?.titleEng || '',
              movieId: data?.DOCID || '',
              image: data?.posters?.split('|')[0] || '',
              actorNm: data?.actors?.actor
                .map((actor: Actor) => actor.actorNm)
                .slice(0, 10),
              directorNm: data?.directors?.director[0]?.directorNm || '',
              plot: data?.plots?.plot[0]?.plotText || '',
              rating: data?.rating || '',
              runtime: data?.runtime || '',
              stills: data?.stlls?.split('|') || [],
              genre: data?.genre,
              nation: data?.nation
            };
          }),
        );
        return detailedMovies;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    },
  );

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearMovies: (state) => {
            state.movieList = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movieList = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// dispatch(fetchMovies(getYesterDay())) 흐름 : 
// 1. fetchMovies가 호출되면 dispatch를 통해 Redux 미들웨어(Thunk)에 의해 실행됨.
// 2. pending 액션이 디스패치되어 로딩 상태를 갱신
// 3. 내부적으로 비동기 작업(API 호출)이 수행
//   - 성공 시: fulfilled 액션이 디스패치되어 데이터를 상태에 저장
//   - 실패 시: rejected 액션이 디스패치되어 에러를 상태에 저장


// 비동기 작업 상태(pending, fulfilled, rejected)에 따라 
// 자동으로 액션 객체를 생성하여 Redux 상태를 업데이트함.


export const { clearMovies } = movieSlice.actions; // 액션 생성자
export default movieSlice.reducer; // 리듀서 함수