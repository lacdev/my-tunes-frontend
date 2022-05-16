import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { fetchGenre } from '../services/Genre.services'

export interface Genre {
  _id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface GenreInitialState {
  loading: boolean
  genre: Genre | null
  error: string
}

const initialState: GenreInitialState = {
  loading: false,
  genre: null,
  error: '',
}

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenre.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      fetchGenre.fulfilled,
      (state, action: PayloadAction<Genre>) => {
        state.loading = false
        state.genre = action.payload
        state.error = ''
      }
    )

    builder.addCase(fetchGenre.rejected, (state, action) => {
      state.loading = false
      state.genre = null
      state.error = action.error.message || 'Something went wrong'
    })
  },
})

export const selectGenre = (state: RootState) => state.genre

export default genreSlice.reducer
