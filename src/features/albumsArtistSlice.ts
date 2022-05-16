import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchAlbumsByArtist } from '../services/Artist.service'

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

export const albumsByArtistSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsByArtist.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchAlbumsByArtist.fulfilled,
      (state, action: PayloadAction<Album[]>) => {
        state.loading = false
        state.albums = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchAlbumsByArtist.rejected, (state, action) => {
      state.loading = false
      state.albums = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectAlbumsByArtist = (state: RootState) => state.albumsByArtist

export default albumsByArtistSlice.reducer
