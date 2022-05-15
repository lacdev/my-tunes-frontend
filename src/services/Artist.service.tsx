import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'

import axios from 'axios'

export const fetchArtists = createAsyncThunk(
  'artist/fetchArtists',
  async () => {
    const response = await axios.get(endpoints.artists)
    console.log('response artist', response.data.response)

    return response.data?.response
  }
)

export const fetchArtist = createAsyncThunk(
  'artist/fetchArtist',
  async (artistId: string | undefined) => {
    const response = await axios.get(`${endpoints.artists}/${artistId}`)

    console.log('response artist', response.data?.data)
    return response.data?.data
  }
)

export const postArtist = createAsyncThunk(
  'artist/fetchPostArtist',
  async (artistId: string | undefined, data: object | undefined) => {
    const response = await axios.post(`${endpoints.artists}/${artistId}`, data)

    console.log('response ', response.data)

    return response.data?.response
  }
)

export const updateArtist = createAsyncThunk(
  'artist/fetchUpdateArtist',
  async (artistId: string | undefined, data: object | undefined) => {
    const response = await axios.patch(`${endpoints.artists}/${artistId}`, data)

    console.log('response ', response)

    return response.data?.response
  }
)

export const deleteArtist = createAsyncThunk(
  'artist/fetchDeleteArtist',
  async (artistId: string | undefined) => {
    const response = await axios.delete(`${endpoints.artists}/${artistId}`)

    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchAlbumsByArtist = createAsyncThunk(
  'artist/fetchAlbumsByArtist',
  async (artistId: string | undefined) => {
    const response = await axios.get(`${endpoints.artists}/${artistId}/albums`)

    console.log('response ', response)

    return response.data?.response
  }
)

export const fetchSongsByArtist = createAsyncThunk(
  'artist/fetchSongsByArtist',
  async (artistId: string | undefined) => {
    const response = await axios.get(`${endpoints.artists}/${artistId}/songs`)

    console.log('response ', response)

    return response.data?.response
  }
)
