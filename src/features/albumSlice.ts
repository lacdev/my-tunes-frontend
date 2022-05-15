import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { string } from 'yup'
import { RootState } from '../app/store'
import { fetchAlbum } from '../services/Album.services'

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

export interface AlbumInitialState {
  loading: boolean
  album: Album | null
  error: string
}

const initialState: AlbumInitialState = {
  loading: false,
  album: null,
  error: '',
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchAlbum.fulfilled,
      (state, action: PayloadAction<Album>) => {
        state.loading = false
        state.album = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.loading = false
      state.album = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectAlbum = (state: RootState) => state.album

export default albumSlice.reducer
