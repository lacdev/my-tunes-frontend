import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  const response = await axios.get(endpoints.albums)
  console.log('response ', response.data?.response)

  return response.data?.response
})

export const fetchAlbum = createAsyncThunk(
  'albums/fetchAlbum',
  async (albumId: string | undefined) => {
    const response = await axios.get(`${endpoints.albums}/${albumId}`)

    console.log('response ', response.data?.response)
    return response.data?.response
  }
)

export const postAlbum = createAsyncThunk(
  'albums/fetchpostAlbum',
  async (albumId: string | undefined, data: object | undefined) => {
    const response = await axios.post(`${endpoints.albums}/${albumId}`, data)

    console.log('response ', response)

    return response.data?.response
  }
)

export const updateAlbum = createAsyncThunk(
  'albums/fetchUpdateAlbum',
  async (albumId: string | undefined, data: object | undefined) => {
    const response = await axios.patch(`${endpoints.albums}/${albumId}`, data)

    console.log('response ', response)

    return response.data?.response
  }
)

export const deleteAlbum = createAsyncThunk(
  'albums/fetchDeleteAlbum',
  async (albumId: string | undefined) => {
    const response = await axios.delete(`${endpoints.albums}/${albumId}`)

    console.log('response ', response)

    return response.data?.response
  }
)
