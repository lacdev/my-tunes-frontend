import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchAlbumsByGenre } from '../services/Genre.services'

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

export interface AlbumsInitialState {
  loading: boolean
  albums: Album[]
  error: string
}

const initialState: AlbumsInitialState = {
  loading: false,
  albums: [],
  error: '',
}

export const albumsByGenreSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsByGenre.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchAlbumsByGenre.fulfilled,
      (state, action: PayloadAction<Album[]>) => {
        state.loading = false
        state.albums = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchAlbumsByGenre.rejected, (state, action) => {
      state.loading = false
      state.albums = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectAlbumsByGenre = (state: RootState) => state.albumsByGenre

export default albumsByGenreSlice.reducer
