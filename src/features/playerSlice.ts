import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface Artist {
  _id: string
  name: string
  country: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface Genre {
  _id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Album {
  _id: string
  title: string
  releaseDate: Date
  image: string
  artist: Artist
  genre: Genre
  createdAt: Date
  updatedAt: Date
}

export interface Player {
  _id: string
  title: string
  artist: Artist
  releaseDate: Date
  album?: Album
  genre: Genre
  previewFile?: string
  fullFile?: string
  price?: number
  trackNumber: number
  duration?: number
}

export interface PlayerInitialState {
  player: Player | null
}

const initialState: PlayerInitialState = {
  player: null,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPreviewSong: (state, action: PayloadAction<Player>) => {
      state.player = action.payload
    },
    setFullSong: (state, action: PayloadAction<Player>) => {
      state.player = action.payload
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
