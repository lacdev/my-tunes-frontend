import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectAlbum } from '../../features/albumSlice'
import { fetchAlbum } from '../../services/Album.services'
import { useEffect } from 'react'

export const AlbumDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { albumId } = useParams()

  const album = useAppSelector(selectAlbum)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAlbum(albumId))
  }, [])

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
        }}
      >
        <img src={album.album?.image} height="512" width="512" />
        <Typography component="h2" variant="h3">
          Album {album.album?.title} by {album.album?.artist?.name} Page
        </Typography>
      </Box>
    </Container>
  )
}
