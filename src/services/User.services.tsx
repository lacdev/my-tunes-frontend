import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'
import authHeader from './authHeader'
import axios from 'axios'

export interface Register {
  username: string
  email: string
  password: string
}
export interface Login {
  email: string
  password: string
}

export async function getUserOrders() {
  const response = await axios.get(endpoints.usersMeOrders, {
    headers: authHeader(),
  })
  console.log('response orders', response.data)
  return response.data
}

export async function getUserPlaylists() {
  const response = await axios.get(endpoints.usersMePlaylists, {
    headers: authHeader(),
  })
  console.log('response orders', response.data)
  return response.data
}

export async function getUserCart() {
  const response = await axios.get(endpoints.usersMeCart, {
    headers: authHeader(),
  })
  console.log('response orders', response.data)
  return response.data
}

export async function getUserSongs() {
  const response = await axios.get(endpoints.usersMeSongs, {
    headers: authHeader(),
  })
  console.log('response orders', response.data)
  return response.data
}
