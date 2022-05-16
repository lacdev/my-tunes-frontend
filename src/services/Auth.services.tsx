import { createAsyncThunk } from '@reduxjs/toolkit'
import { endpoints } from '../endpoints/endpoints'
import axios from 'axios'

export interface SignUp {
  username: string
  email: string
  password: string
}
export interface Login {
  email: string
  password: string
}

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async ({ email, password }: Login) => {
    const response = await axios.post(endpoints.login, {
      email: email,
      password: password,
    })

    console.log('login response: ', response)
    return response.data
  }
)

export const userSingUp = createAsyncThunk(
  'user/userLogin',
  async ({ username, email, password }: SignUp) => {
    const response = await axios.post(endpoints.login, {
      username: username,
      email: email,
      password: password,
    })
    console.log('login response: ', response)
    return response.data
  }
)

export async function userSignIn({ email, password }) {
  const response = await axios.post(endpoints.login, {
    email: email,
    password: password,
  })
  console.log('response', response.data?.token)
  return response.data?.token
}

export async function userRegister({ username, email, password }) {
  const response = await axios.post(endpoints.register, {
    username: username,
    email: email,
    password: password,
  })
  console.log('response user signup', response)
  return response.data
}
