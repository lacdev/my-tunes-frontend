import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Paper, CircularProgress } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectGenres } from '../../features/genresSlice'
import { fetchGenres } from '../../services/Genre.services'
import formatGenre from '../../utils/formatGenre'

export const Genres = () => {
  const genres = useAppSelector(selectGenres)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
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
      // alignItems="center"
      // justifyContent="center"
    >
      {genres.loading && (
        <div>
          <CircularProgress color="primary" />
        </div>
      )}
      {!genres.loading && genres.error ? (
        <div>Error: {genres.error}</div>
      ) : null}
      {!genres.loading && genres.genres.length ? (
        <>
          <Grid item={true} xs={12}>
            <Typography
              ml={4}
              my={4}
              component="h2"
              variant="h3"
              fontWeight="bold"
            >
              Genres
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
            {genres.genres.map((genre) => (
              <Grid
                component={Paper}
                item
                key={genre._id}
                m={1}
                xs={4}
                sx={{
                  borderRadius: '16px',
                }}
              >
                <NavLink
                  to={`/genres/${genre._id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  <Box
                    sx={{
                      height: '128px',
                      backgroundImage:
                        'linear-gradient(to right, #ff416c, #ff4b2b)',
                      padding: '24px',
                      borderRadius: '16px',
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {formatGenre(genre.name)}
                    </Typography>
                  </Box>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}
