import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { setMessage } from './messageSlice'
import authService from '../services/Auth.services'
const user = JSON.parse(localStorage.getItem('user')) || ''

export interface Register {
  username: string
  email: string
  password: string
}

export const registerThunk = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }: Register, thunkAPI) => {
    try {
      const response = await authService.userRegister({
        username,
        email,
        password,
      })
      thunkAPI.dispatch(setMessage(response.data.message))
      return response.data
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export interface Login {
  email: string
  password: string
}

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }: Login, thunkAPI) => {
    try {
      const data = await authService.userSignIn({ email, password })
      return { user: data }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authService.userLogout()
})

export interface User {
  avatar: string
  username: string
  isAdmin: boolean
  token: string
}

export interface AuthInitialState {
  isLoggedIn: boolean
  user: User | null
}

const initialState: AuthInitialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    'register.fulfilled': (state, action) => {
      state.isLoggedIn = false
    },
    'register.rejected': (state, action) => {
      state.isLoggedIn = false
    },
    'login.fulfilled': (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    'login.rejected': (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
    'logout.fulfilled': (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer

// export const { setMessage, clearMessage } = messageSlice.actions
// export const selectMessage = (state: RootState) => state.message
// export default messageSlice.reducer

// const { reducer, actions } = messageSlice
// export default reducer
// export const { ordered, restocked } = cakeSlice.actions
