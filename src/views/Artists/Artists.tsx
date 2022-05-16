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
      mt={2}
      mb={30}
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
      {/* <Grid container item={true} xs={12}>
        <Grid item xs={12}>
          <Typography
            ml={4}
            my={4}
            component="h2"
            variant="h3"
            fontWeight="bold"
          >
            Artists
          </Typography>
        </Grid>
      </Grid> */}

      {artists.loading && (
        <Grid
          item
          xs={12}
          alignSelf="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color="primary" />
        </Grid>
      )}
      {!artists.loading && artists.error ? (
        <Box>Error: {artists.error}</Box>
      ) : null}
      {!artists.loading && artists ? (
        <>
          <Grid container item={true} xs={12}>
            <Grid item xs={12}>
              <Typography
                ml={4}
                my={4}
                component="h2"
                variant="h3"
                fontWeight="bold"
              >
                Artists
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="start"
            justifyContent="space-around"
            item={true}
            xs={12}
            minWidth="xl"
            mt={2}
            gap={1}
            sx={{
              background: 'white',
            }}
          >
            {artists.artists?.map((artist) => (
              <Grid
                component={Paper}
                // item
                xs={3}
                key={artist._id}
                // m={2}
                // sx={{
                //   // padding: '16px',
                //   borderRadius: '16px',
                //   // height: '100px',
                //   // width: '100px',
                // }}
                item={true}
                // xs={3}
                my={2}
              >
                <NavLink to={`/artists/${artist._id}`}>
                  <Box>
                    <img
                      src={artist.image}
                      height="100%"
                      width="100%"
                      style={{
                        borderRadius: '16px 16px 0 0',
                      }}
                      loading="lazy"
                      alt="artist"
                    />
                  </Box>
                </NavLink>
                <Box
                  sx={{
                    padding: '12px',
                  }}
                >
                  <NavLink
                    to={`/artists/${artist._id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {artist.name}
                    </Typography>
                  </NavLink>
                  <Typography variant="body1">{artist.country}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}
