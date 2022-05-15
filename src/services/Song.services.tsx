import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'
import axios from 'axios'

export const fetchSong = createAsyncThunk(
  'songs/fetchSong',
  async (songId: string | undefined) => {
    const response = await axios.get(`${endpoints.songs}/${songId}`)
    console.log('response ', response.data)
    return response.data?.response
  }
)
