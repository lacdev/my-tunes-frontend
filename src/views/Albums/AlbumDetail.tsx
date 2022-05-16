import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectAlbum } from '../../features/albumSlice'
import { selectSong } from '../../features/songSlice'
import { fetchAlbum } from '../../services/Album.services'
import { fetchSong } from '../../services/Song.services'
import { useEffect } from 'react'
import { formatDate, formatCreationDate } from '../../utils/date'
import formatGenre from '../../utils/formatGenre'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

// -----------

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const AlbumDetail = () => {
  const navigate = useNavigate()
  // {replace: true} to replace the history in the stack
  const { albumId } = useParams()

  const album = useAppSelector(selectAlbum)

  const song = useAppSelector(selectSong)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAlbum(albumId))
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
        <Grid item={true} xs={2}>
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
          xs={10}
          sx={{
            height: '100%',
          }}
        >
          {album.loading && (
            <Box>
              <CircularProgress color="primary" />
            </Box>
          )}
          {!album.loading && album.error ? (
            <Box>Error: {album.error}</Box>
          ) : null}
          {!album.loading && album.album ? (
            <Grid container item={true} xs={12} gap={3}>
              <Grid item={true} xs={3}>
                <img
                  src={album.album?.image}
                  height="256"
                  width="256"
                  style={{
                    borderRadius: '16px',
                  }}
                  alt="album"
                />
              </Grid>

              <Grid item={true} xs={8}>
                <Typography component="h2" variant="h2" fontWeight="bold">
                  {album.album?.title}
                </Typography>
                <Typography component="h4" variant="h4">
                  {album.album?.artist?.name}
                </Typography>

                <Typography component="h5" variant="h5">
                  {formatCreationDate(album.album?.releaseDate)}
                </Typography>
                <Typography component="h6" variant="h6">
                  {album.album?.songs?.length} songs
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/albums')}
                    startIcon={<ShoppingBagIcon />}
                    sx={{
                      backgroundImage:
                        'linear-gradient(to right, #02AAB0 0%, #24BEAC  51%, #02AAB0  100%)',
                      padding: '8px 16px',
                      textAlign: 'center',
                      transition: '0.5s',
                      color: 'white',
                      borderRadius: '8px',
                      backgroundSize: '200% auto',
                      boxShadow: '0 0 20px #eee',
                      '&:hover': {
                        backgroundPosition: 'right center',
                        color: '#fff',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    Buy Vinyl
                  </Button>
                </Box>
              </Grid>
              <Grid container item xs={12}>
                <TableContainer
                  component={Paper}
                  elevation={3}
                  sx={{
                    borderRadius: '8px',
                  }}
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">
                          <Typography ml={10}>Title</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>Artists</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>Genres</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>Price</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography> </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {album.album?.songs?.map((song) => (
                        <TableRow
                          key={song._id}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                              }}
                            >
                              <Button
                                size="large"
                                onClick={() => dispatch(fetchSong(song._id))}
                                sx={{
                                  background: 'white',
                                  color: 'black',
                                  padding: '8px 8px',
                                  marginRight: '16px',
                                }}
                                startIcon={<PlayArrowIcon />}
                              ></Button>

                              <Typography variant="h6">{song.title}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h6">
                              {song.artist?.name}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h6">
                              {formatGenre(song.genre?.name)}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h6">{song.price}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              sx={{
                                backgroundImage:
                                  'linear-gradient(to right, #02AAB0 0%, #24BEAC  51%, #02AAB0  100%)',
                                padding: '8px 16px',
                                textAlign: 'center',
                                transition: '0.5s',
                                color: 'white',
                                borderRadius: '8px',
                                backgroundSize: '200% auto',
                                boxShadow: '0 0 20px #eee',
                                '&:hover': {
                                  backgroundPosition: 'right center',
                                  color: '#fff',
                                  textDecoration: 'none',
                                },
                              }}
                              startIcon={<ShoppingBagIcon />}
                            >
                              Add To Cart
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </>
  )
}

// <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 minHeight: '90vh',
//               }}
//             ></Box>

{
  /* <Grid item xs={12}>
        </Grid> */
}
