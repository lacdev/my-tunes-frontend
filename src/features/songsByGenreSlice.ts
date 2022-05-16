import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchSongsByGenre } from '../services/Genre.services'

export interface Artist {
  _id: string
  name: string
  country: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface Song {
  _id: string
  title: string
  artist: Artist
  releaseDate: Date
  album?: Album
  genre: Genre
  previewFile?: string
  fullFile?: string
  price?: number
  trackNumber: number
}

export interface Genre {
  _id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Album {
  _id: string
  title: string
  releaseDate: Date
  image: string
  artist: Artist
  genre: Genre
  createdAt: Date
  updatedAt: Date
}

export interface SongsInitialState {
  loading: boolean
  songs: Song[]
  error: string
}

const initialState: SongsInitialState = {
  loading: false,
  songs: [],
  error: '',
}

export const songsByGenreSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSongsByGenre.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchSongsByGenre.fulfilled,
      (state, action: PayloadAction<Song[]>) => {
        state.loading = false
        state.songs = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchSongsByGenre.rejected, (state, action) => {
      state.loading = false
      state.songs = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectSongsByGenre = (state: RootState) => state.songsByGenre

export default songsByGenreSlice.reducer
