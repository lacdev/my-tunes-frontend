import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'

import axios from 'axios'

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const response = await axios.get(endpoints.getGenres)
  return response.data?.data
})

export const fetchGenre = createAsyncThunk(
  'genre/fetchGenre',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.getGenres}${genreId}`)

    // console.log('response ', response.data?.response)
    return response.data?.response
  }
)
