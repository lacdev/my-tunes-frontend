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
          // .btn-grad {
          //     background-image: linear-gradient(to right, #E0EAFC 0%, #CFDEF3  51%, #E0EAFC  100%);
          //     margin: 10px;
          //     padding: 15px 45px;
          //     text-align: center;
          //     text-transform: uppercase;
          //     transition: 0.5s;
          //   background-size: 200% auto;
          //   color: white;
          // box-shadow: 0 0 20px #eee;
          //   border-radius: 10px;
          //     display: block;
          //   }

          //   .btn-grad:hover {
          //     background-position: right center; /* change the direction of the change here */
          //     color: #fff;
          //     text-decoration: none;
          //   }

          style={{
            // backgroundColor: 'white',
            // background: 'linear-gradient(to right, #1c92d2, #f2fcfe)',
            background:
              'linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(210,230,255,1) 100%)',
            //   'linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(210,230,255,1) 100%)',

            // backgroundImage:
            //   'linear-gradient(to right, #E0EAFC 0%, #CFDEF3  51%, #E0EAFC  100%)',
            borderRadius: '10px',
            backgroundSize: '200% auto',
            color: 'black',
            boxShadow: '0 0 20px #eee',
            minWidth: '1250px',
            margin: '8px',
            // maxWidth: '1536px',
          }}
          //   autoPlay
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
