import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  CircularProgress,
  LinearProgress,
} from '@mui/material'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectArtists } from '../../features/artistsSlice'
import { fetchArtists } from '../../services/Artist.service'
import { useEffect } from 'react'

export const Artists = () => {
  const artists = useAppSelector(selectArtists)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArtists())
  }, [])

  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <Grid
      container
      gap={4}
      component={Paper}
      maxWidth="xl"
      my={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        justifyContent: 'space-around',
        alignItems: 'space-around',
        alignContent: 'center',
        padding: '24px',
      }}
    >
      <Grid item={true} xs={12} alignSelf="center">
        <Typography component="h2" variant="h3">
          Albums Page
        </Typography>
      </Grid>

      {artists.loading && (
        <div>
          <CircularProgress color="primary" />
        </div>
      )}
      {!artists.loading && artists.error ? (
        <div>Error: {artists.error}</div>
      ) : null}
      {!artists.loading && artists ? (
        <Grid
          container
          item={true}
          xs={12}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
          }}
        >
          {artists.artists?.map((artist) => (
            <Grid item xs={4} key={artist._id}>
              <NavLink to={`/artists/${artist._id}`}>
                <img
                  src={artist.image}
                  height="200"
                  width="200"
                  loading="lazy"
                />
              </NavLink>
              <NavLink to={`/artists/${artist._id}`}>
                <Typography variant="h5">{artist.name}</Typography>
              </NavLink>
              <Typography variant="h6">{artist.country}</Typography>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Grid>
  )
}
