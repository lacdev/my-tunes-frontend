import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import genresReducer from '../features/genresSlice'
import genreReducer from '../features/genreSlice'
import albumsReducer from '../features/albumsSlice'
import albumReducer from '../features/albumSlice'
import artistsReducer from '../features/artistsSlice'
import artistReducer from '../features/artistSlice'
import playerReducer from '../features/playerSlice'
import songReducer from '../features/songSlice'
import albumsByArtistReducer from '../features/albumsArtistSlice'
import songsByArtistReducer from '../features/songsByArtistSlice'

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    genre: genreReducer,
    albums: albumsReducer,
    album: albumReducer,
    albumsByArtist: albumsByArtistReducer,
    artists: artistsReducer,
    artist: artistReducer,
    player: playerReducer,
    song: songReducer,
    songsByArtist: songsByArtistReducer,
    // songs: songsReducer
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
