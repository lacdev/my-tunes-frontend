import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import genresReducer from '../features/genresSlice'
import genreReducer from '../features/genreSlice'

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    genre: genreReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
