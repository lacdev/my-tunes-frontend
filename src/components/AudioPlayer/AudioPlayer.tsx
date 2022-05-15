import { useState } from 'react'
import { Box } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { selectPlayer } from '../../features/playerSlice'
import { selectSong } from '../../features/songSlice'

export const SongsPlayer = () => {
  const player = useAppSelector(selectPlayer)
  const song = useAppSelector(selectSong)
  const dispatch = useAppDispatch()
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
      }}
    >
      {song.song?.previewFile && (
        <AudioPlayer
          style={{
            backgroundColor: 'white',
            color: 'black',
            minWidth: '1250px',
            margin: '8px',
            // maxWidth: '1536px',
          }}
          autoPlay
          header={
            song.song?.previewFile
              ? `${song.song?.artist?.name} - ${song.song?.title} (Preview)`
              : `${song.song?.artist?.name} - ${song.song?.title}`
          }
          layout="horizontal"
          src={song.song?.previewFile}
          onPlay={() => console.log('onPlay')}
          // other props here
        />
      )}
    </Box>
  )
}
