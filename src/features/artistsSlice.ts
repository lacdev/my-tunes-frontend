import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchArtists } from '../services/Artist.service'

export interface Artist {
  _id: string
  name: string
  country: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface ArtistsInitialState {
  loading: boolean
  artists: Artist[]
  error: string
}

const initialState: ArtistsInitialState = {
  loading: false,
  artists: [],
  error: '',
}

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtists.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchArtists.fulfilled,
      (state, action: PayloadAction<Artist[]>) => {
        state.loading = false
        state.artists = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchArtists.rejected, (state, action) => {
      state.loading = false
      state.artists = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectArtists = (state: RootState) => state.artists

export default artistsSlice.reducer
