import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchAlbums } from '../services/Album.services'

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

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action: PayloadAction<Album[]>) => {
        state.loading = false
        state.albums = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.loading = false
      state.albums = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectAlbums = (state: RootState) => state.albums

export default albumsSlice.reducer
