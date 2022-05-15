import { useState } from 'react'
import { Box } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { selectPlayer } from '../../features/playerSlice'

export const SongsPlayer = () => {
  const player = useAppSelector(selectPlayer)
  const dispatch = useAppDispatch()
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
      }}
    >
      {player.player?.previewFile && (
        <AudioPlayer
          style={{
            //   backgroundColor: 'white',
            //   background: 'linear-gradient(to right , #36EAEF, #6B0AC9)',
            backgroundColor: '#8EC5FC',
            //   backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
            backgroundImage:
              // 'linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%);',
              'linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%)',
            color: 'black',
            borderRadius: '16px',
            //   backgroundColor:
            //     'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);',
            width: '960px',
          }}
          header="Legowelt - Santiago Arp Chile Track"
          layout="horizontal"
          src="https://firebasestorage.googleapis.com/v0/b/my-tunes-349800.appspot.com/o/audio%2Ffull%2F02%20Shanti%20Celeste%20-%20Thoughts%20%5BIdle%20Hands%5D.mp3?alt=media&token=19622c04-052a-434e-b4dd-4ae336232951"
          onPlay={() => console.log('onPlay')}
          // other props here
        />
      )}
    </Box>
  )
}
