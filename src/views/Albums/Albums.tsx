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
      mt={2}
      component={Paper}
      elevation={3}
      container
      item={true}
      maxWidth="xl"
      xs={12}
      direction="row"
      p={4}
      sx={{
        borderRadius: '16px',
        minHeight: '100vh',
      }}
      alignItems="center"
      justifyContent="center"
    >
      {albums.loading && (
        <div>
          <CircularProgress color="primary" />
        </div>
      )}
      {!albums.loading && albums.error ? (
        <div>Error: {albums.error}</div>
      ) : null}
      {!albums.loading && albums ? (
        <>
          <Grid item={true} xs={12}>
            <Typography
              ml={4}
              my={4}
              component="h2"
              variant="h3"
              fontWeight="bold"
            >
              Albums
            </Typography>
          </Grid>

          <Grid
            container
            alignItems="start"
            justifyContent="space-around"
            item={true}
            xs={11}
            minWidth="xl"
            mt={2}
            mb={30}
            gap={1}
            sx={{
              background: 'white',
            }}
          >
            {albums.albums.map((album) => (
              <Grid mt={2} component={Paper} item xs={3} key={album._id}>
                <NavLink to={`/albums/${album._id}`}>
                  <img
                    src={album.image}
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="album"
                  />
                </NavLink>
                <Box
                  sx={{
                    padding: '12px',
                  }}
                >
                  <NavLink
                    to={`/albums/${album._id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {album.title}
                    </Typography>
                  </NavLink>
                  <NavLink
                    to={`/artists/${album.artist._id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography variant="body1">{album.artist.name}</Typography>
                  </NavLink>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
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
