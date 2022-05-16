import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchSongsByArtist } from '../services/Artist.service'
import { Song } from './songSlice'

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

export const songsByArtistSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSongsByArtist.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchSongsByArtist.fulfilled,
      (state, action: PayloadAction<Song[]>) => {
        state.loading = false
        state.songs = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchSongsByArtist.rejected, (state, action) => {
      state.loading = false
      state.songs = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectSongsByArtist = (state: RootState) => state.songsByArtist

export default songsByArtistSlice.reducer
