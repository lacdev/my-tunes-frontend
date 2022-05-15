import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
// import { fetchArtist } from '../services/Artist.service'

export interface PlayerInitialState {
  artist: string
  songName: string
  songUrl: string
  songImage: string
  //   isPaused: boolean
}

// export interface ArtistsInitialState {
//   loading: boolean
//   artist: Artist | null
//   error: string
// }

const initialState: PlayerInitialState = {
  artist: '',
  songName: '',
  songUrl: '',
  songImage: '',
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<string>) => {
      state.songUrl = action.payload
    },
  },
})

export const selectPlayer = (state: RootState) => state.player

export default playerSlice.reducer

//   extraReducers: (builder) => {
//     builder.addCase(fetchArtist.pending, (state) => {
//       state.loading = true
//     })

//     builder.addCase(
//       fetchArtist.fulfilled,
//       (state, action: PayloadAction<Artist>) => {
//         state.loading = false
//         state.artist = action.payload
//         state.error = ''
//       }
//     )

//     builder.addCase(fetchArtist.rejected, (state, action) => {
//       state.loading = false
//       state.artist = null
//       state.error = action.error.message || 'Something went wrong'
//     })
//   },
