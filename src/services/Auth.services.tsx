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

export async function userSignIn({ email, password }: Login) {
  const response = await axios.post(endpoints.login, {
    email: email,
    password: password,
  })

  if (response.data) {
    const token = response.data?.token

    console.log('token? ', token)
    const login = await axios.get(endpoints.usersMe, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (login.data) {
      console.log('login data?', login.data?.response)

      const { avatar, username, isAdmin } = login.data?.response
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: username,
          isAdmin: isAdmin,
          avatar: avatar,
          token: token,
        })
      )
    }
  }
  console.log('login response from service: ', response.data)

  return response.data
}

export const userLogout = () => {
  localStorage.removeItem('user')
}

export async function userRegister({ username, email, password }: Register) {
  const response = await axios.post(endpoints.register, {
    username: username,
    email: email,
    password: password,
  })
  console.log('response user signup', response)
  return response.data
}

const authService = {
  userRegister,
  userSignIn,
  userLogout,
}
export default authService

// export const userLogin = createAsyncThunk(
//   'user/userLogin',
//   async ({ email, password }: Login) => {
//     const response = await axios.post(endpoints.login, {
//       email: email,
//       password: password,
//     })

//     console.log('login response from service: ', response.data)
//     return response.data
//   }
// )
