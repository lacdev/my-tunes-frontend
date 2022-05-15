import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'
import axios from 'axios'

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const response = await axios.get(endpoints.genres)
  return response.data?.data
})

export const fetchGenre = createAsyncThunk(
  'genre/fetchGenre',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.genres}/${genreId}`)

    console.log('response ', response)
    return response.data?.response
  }
)

export const postGenre = createAsyncThunk(
  'genre/fetchPostGenre',
  async (genreId: string | undefined, data: object | undefined) => {
    const response = await axios.post(`${endpoints.genres}${genreId}`, data)

    console.log('response ', response)

    return response.data?.response
  }
)

export const updateGenre = createAsyncThunk(
  'genre/fetchUpdateGenre',
  async (genreId: string | undefined, data: object | undefined) => {
    const response = await axios.patch(`${endpoints.genres}${genreId}`, data)

    console.log('response ', response)

    return response.data?.response
  }
)

export const deleteGenre = createAsyncThunk(
  'genre/fetchDeleteGenre',
  async (genreId: string | undefined) => {
    const response = await axios.delete(`${endpoints.genres}${genreId}`)

    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchPlaylistsByGenre = createAsyncThunk(
  'genre/fetchPlaylists',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.genres}${genreId}/playlists`)
    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchAlbumsByGenre = createAsyncThunk(
  'genre/fetchAlbums',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.genres}${genreId}/albums`)

    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchSongsByGenre = createAsyncThunk(
  'genre/fetchSongs',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.genres}${genreId}/songs`)

    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchProductsByGenre = createAsyncThunk(
  'genre/fetchProducts',
  async (genreId: string | undefined) => {
    const response = await axios.get(`${endpoints.genres}${genreId}/products`)

    console.log('response ', response)

    return response.data?.response
  }
)
