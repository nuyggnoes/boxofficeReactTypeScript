import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';

const store = configureStore({
    reducer: {
        movies: movieReducer, // movies 상태를 관리하는 리듀서
    },
});

export type RootState = ReturnType<typeof store.getState>; // store의 전체 상태 타입 
export type AppDispatch = typeof store.dispatch;

export default store;