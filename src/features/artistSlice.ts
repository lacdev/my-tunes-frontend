import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchArtist } from '../services/Artist.service'

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
  artist: Artist | null
  error: string
}

const initialState: ArtistsInitialState = {
  loading: false,
  artist: null,
  error: '',
}

export const artistSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchArtist.fulfilled,
      (state, action: PayloadAction<Artist>) => {
        state.loading = false
        state.artist = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchArtist.rejected, (state, action) => {
      state.loading = false
      state.artist = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectArtist = (state: RootState) => state.artist

export default artistSlice.reducer
