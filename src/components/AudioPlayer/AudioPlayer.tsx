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
            background:
              'linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(210,230,255,1) 100%)',
            borderRadius: '10px',
            backgroundSize: '200% auto',
            color: 'black',
            boxShadow: '0 0 20px #eee',
            minWidth: '960px',
            margin: '8px',
            fontWeight: '600',
            padding: '16px 24px',
            // maxWidth: '1536px',
          }}
          autoPlay
          header={`${song.song?.artist?.name} - ${song.song?.title}`}
          layout="horizontal"
          src={song.song?.previewFile}
          // onPlay={() => console.log('onPlay')}
          // other props here
        />
      )}
    </Box>
  )
}
