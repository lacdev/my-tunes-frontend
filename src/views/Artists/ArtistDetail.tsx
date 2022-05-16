import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { CircularProgress, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectArtist } from '../../features/artistSlice'
import {
  fetchAlbumsByArtist,
  fetchArtist,
  fetchSongsByArtist,
} from '../../services/Artist.service'
import formatGenre from '../../utils/formatGenre'
import { fetchSong } from '../../services/Song.services'
import { useEffect } from 'react'
import { selectAlbumsByArtist } from '../../features/albumsArtistSlice'
import { selectSongsByArtist } from '../../features/songsByArtistSlice'

// -------------

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const ArtistDetail = () => {
  const navigate = useNavigate()
  const { artistId } = useParams()
  const dispatch = useAppDispatch()
  const artist = useAppSelector(selectArtist)
  const albumsByArtist = useAppSelector(selectAlbumsByArtist)
  const songsByArtist = useAppSelector(selectSongsByArtist)

  useEffect(() => {
    dispatch(fetchArtist(artistId))
    dispatch(fetchAlbumsByArtist(artistId))
    dispatch(fetchSongsByArtist(artistId))
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
          {artist.loading && (
            <Box>
              <CircularProgress color="primary" />
            </Box>
          )}
          {!artist.loading && artist.error ? (
            <Box>Error: {artist.error}</Box>
          ) : null}
          {!artist.loading &&
          !albumsByArtist.loading &&
          artist &&
          albumsByArtist ? (
            <Grid container item={true} xs={12} gap={3}>
              <Grid item={true} xs={3}>
                <img
                  src={artist.artist?.image}
                  height="100%"
                  width="100%"
                  style={{
                    borderRadius: '16px',
                  }}
                  alt="artist"
                />
              </Grid>

              <Grid item={true} xs={8}>
                <Typography component="h2" variant="h2" fontWeight="bold">
                  {artist.artist?.name}
                </Typography>
                <Typography component="h2" variant="h4">
                  {artist.artist?.country}
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} my={4}>
                  <Typography component="h3" variant="h3" fontWeight="bold">
                    Albums
                  </Typography>
                  <Grid
                    container
                    alignItems="start"
                    justifyContent="start"
                    item={true}
                    xs={11}
                    minWidth="xl"
                    mt={2}
                    gap={8}
                    sx={{
                      background: 'white',
                    }}
                  >
                    {albumsByArtist.albums.map((album) => (
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
                    {/* {albumsByArtist.albums?.map((album) => (
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
                            <Typography fontWeight="bold" variant="h4">
                              {album.title}
                            </Typography>
                          </NavLink>
                          <Typography variant="h5">
                            {album.artist?.name}
                          </Typography>
                        </Box>
                      </Box>
                    ))} */}
                  </Grid>
                  <Box my={4}>
                    <Typography component="h3" variant="h3" fontWeight="bold">
                      Songs
                    </Typography>
                  </Box>
                  <Grid>
                    <Grid container item xs={12} mb={30}>
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
                            {songsByArtist.songs.map((song) => (
                              <TableRow
                                key={song._id}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
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
                                      onClick={() =>
                                        dispatch(fetchSong(song._id))
                                      }
                                      sx={{
                                        background: 'white',
                                        color: 'black',
                                        padding: '8px 8px',
                                        marginRight: '16px',
                                      }}
                                      startIcon={<PlayArrowIcon />}
                                    ></Button>

                                    <Typography variant="h6">
                                      {song.title}
                                    </Typography>
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
                                  <Typography variant="h6">
                                    {song.price}
                                  </Typography>
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
                </Grid>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </>
  )
}

{
  /* <Container component="main" maxWidth="sm"> */
}
//   <Box
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '90vh',
//     }}
//   >
//     {artist.loading && (
//       <div>
//         <CircularProgress color="primary" />
//       </div>
//     )}
//     {!artist.loading && artist.error ? (
//       <div>Error: {artist.error}</div>
//     ) : null}
//     {!artist.loading && artist ? (
//       <>
//         <img
//           src={artist.artist?.image}
//           height="512"
//           width="512"
//           alt="artist"
//         />
//         <Typography component="h2" variant="h3">
//           {artist.artist?.name} Detail Page
//         </Typography>
//         <Typography component="h2" variant="h3">
//           {artist.artist?.country}
//         </Typography>
//       </>
//     ) : null}
//   </Box>
// </Container>
// {replace: true} to replace the history in the stack
