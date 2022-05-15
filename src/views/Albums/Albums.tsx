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
import { selectAlbums } from '../../features/albumsSlice'
import { fetchAlbums } from '../../services/Album.services'
import { useEffect } from 'react'

export const Albums = () => {
  const albums = useAppSelector(selectAlbums)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAlbums())
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

      {albums.loading && (
        <div>
          <CircularProgress color="primary" />
        </div>
      )}
      {!albums.loading && albums.error ? (
        <div>Error: {albums.error}</div>
      ) : null}
      {!albums.loading && albums ? (
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
          {albums.albums.map((album) => (
            <Grid item xs={4} key={album._id}>
              <NavLink to={`/albums/${album._id}`}>
                <img src={album.image} height="256" width="256" />
              </NavLink>
              <NavLink to={`/albums/${album._id}`}>
                <Typography variant="h5">{album.title}</Typography>
              </NavLink>
              <NavLink to={`/artists/${album.artist._id}`}>
                <Typography variant="h6">{album.artist.name}</Typography>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Grid>
  )
}

{
  /* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
        }}
      > */
}

{
  /* </Box> */
}
