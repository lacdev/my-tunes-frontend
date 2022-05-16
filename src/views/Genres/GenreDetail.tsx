import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { CircularProgress, Paper } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectGenre } from '../../features/genreSlice'
import { fetchAlbumsByGenre, fetchGenre } from '../../services/Genre.services'
import formatGenre from '../../utils/formatGenre'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { selectAlbumsByGenre } from '../../features/albumsByGenreSlice'

export const GenreDetail = () => {
  const navigate = useNavigate()
  const { genreId } = useParams()

  const genre = useAppSelector(selectGenre)
  const albumsByGenre = useAppSelector(selectAlbumsByGenre)

  console.log('genre?', genre)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGenre(genreId))
    dispatch(fetchAlbumsByGenre(genreId))
  }, [])

  return (
    <>
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
      >
        <Grid item={true} xs={2} my={2}>
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{
              backgroundImage:
                'linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%)',
              padding: '8px 16px',
              textAlign: 'center',
              transition: '0.5s',
              color: 'white',
              borderRadius: '8px',
              marginLeft: '16px',
              backgroundSize: '200% auto',
              boxShadow: '0 0 20px #eee',
              '&:hover': {
                backgroundPosition: 'right center',
                color: '#fff',
                textDecoration: 'none',
              },
            }}
          >
            Back
          </Button>
        </Grid>

        <Grid
          container
          item={true}
          direction="row"
          xs={10}
          sx={{
            height: '100%',
          }}
        >
          {genre.loading && (
            <Box>
              <CircularProgress color="primary" />
            </Box>
          )}
          {!genre.loading && genre.error ? (
            <Box>Error: {genre.error}</Box>
          ) : null}
          {!genre.loading && genre.genre && albumsByGenre ? (
            <Grid container item={true} xs={12} direction="row">
              <Grid item xs={12}>
                <Typography
                  component="h2"
                  variant="h2"
                  fontWeight="bold"
                  fontSize="72px"
                >
                  {formatGenre(genre.genre?.name)}
                </Typography>
              </Grid>

              {/* Albums and songs by genre starts here  */}

              <Grid item xs={12} my={4}>
                <Typography component="h3" variant="h3" fontWeight="bold">
                  Albums
                </Typography>
              </Grid>

              <Grid
                container
                alignItems="start"
                justifyContent="start"
                item={true}
                xs={11}
                minWidth="xl"
                mt={2}
                mb={30}
                gap={8}
                sx={{
                  background: 'white',
                }}
              >
                {/* Albums by Genre */}

                {albumsByGenre.albums.map((album) => (
                  <Grid item xs={3} my={2}>
                    <Box>
                      <Box
                        sx={{
                          borderRadius: '16px',
                          height: '100%',
                          width: '100%',
                        }}
                      >
                        <NavLink to={`/albums/${album._id}`}>
                          <img
                            src={album.image}
                            width="100%"
                            height="100%"
                            style={{
                              borderRadius: '16px',
                            }}
                            alt="album"
                          />
                        </NavLink>
                      </Box>

                      <Box
                        my={1}
                        sx={{
                          padding: '8px',
                        }}
                      >
                        <NavLink
                          to={`/albums/${album._id}`}
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        >
                          <Typography fontWeight="bold" variant="h5">
                            {album.title}
                          </Typography>
                        </NavLink>
                        <Typography variant="body1">
                          {album.artist?.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </>
  )
}

// {replace: true} to replace the history in the stack

//  {/* <Grid item xs={12} my={4}>
//                 <Typography component="h3" variant="h3" fontWeight="bold">
//                   Songs
//                 </Typography>
//               </Grid> */}

//               {/* <Grid container item xs={12}>
//                 {/* Songs By Genre */}
//               </Grid> */}
