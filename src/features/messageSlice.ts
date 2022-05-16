import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface message {
  message: string
}

const initialState: message = {
  message: '',
}
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload }
    },
    clearMessage: () => {
      return { message: '' }
    },
  },
})

export const { setMessage, clearMessage } = messageSlice.actions
export const selectMessage = (state: RootState) => state.message
export default messageSlice.reducer

// const { reducer, actions } = messageSlice
// export default reducer
// export const { ordered, restocked } = cakeSlice.actions
