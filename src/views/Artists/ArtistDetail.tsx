import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectArtist } from '../../features/artistSlice'
import { fetchArtist } from '../../services/Artist.service'
import { useEffect } from 'react'

export const ArtistDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { artistId } = useParams()

  const artist = useAppSelector(selectArtist)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArtist(artistId))
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
        {artist.loading && <div>Loading...</div>}
        {!artist.loading && artist.error ? (
          <div>Error: {artist.error}</div>
        ) : null}
        {!artist.loading && artist ? (
          <>
            <img
              src={artist.artist?.image}
              height="512"
              width="512"
              alt="artist"
            />
            <Typography component="h2" variant="h3">
              {artist.artist?.name} Detail Page
            </Typography>
            <Typography component="h2" variant="h3">
              {artist.artist?.country}
            </Typography>
          </>
        ) : null}
      </Box>
    </Container>
  )
}
