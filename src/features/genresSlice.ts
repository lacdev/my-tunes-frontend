import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchGenres } from '../services/Genre.services'

export interface Genre {
  _id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface GenreInitialState {
  loading: boolean
  genres: Genre[]
  error: string
}

const initialState: GenreInitialState = {
  loading: false,
  genres: [],
  error: '',
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchGenres.fulfilled,
      (state, action: PayloadAction<Genre[]>) => {
        state.loading = false
        state.genres = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.loading = false
      state.genres = []
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectGenres = (state: RootState) => state.genres

export default genresSlice.reducer
