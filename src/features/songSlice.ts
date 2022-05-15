import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchSong } from '../services/Song.services'

export interface Artist {
  _id: string
  name: string
  country: string
  image: string
  createdAt: Date
  updatedAt: Date
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
  songs: Song[]
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

export interface SongInitialState {
  loading: boolean
  song: Song | null
  error: string
}

const initialState: SongInitialState = {
  loading: false,
  song: null,
  error: '',
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSong.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchSong.fulfilled,
      (state, action: PayloadAction<Song>) => {
        state.loading = false
        state.song = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchSong.rejected, (state, action) => {
      state.loading = false
      state.song = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectSong = (state: RootState) => state.song

export default songSlice.reducer
