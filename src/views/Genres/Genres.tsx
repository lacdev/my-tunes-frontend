import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectGenres } from '../../features/genresSlice'
import { fetchGenres } from '../../services/Genre.services'

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
        <Typography component="h2" variant="h3">
          Genres Page
        </Typography>
        <Box>
          {genres.loading && <div>Loading...</div>}
          {!genres.loading && genres.error ? (
            <div>Error: {genres.error}</div>
          ) : null}
          {!genres.loading && genres.genres.length ? (
            <ul>
              {genres.genres.map((genre) => (
                <li key={genre._id}>
                  <NavLink to={`/genres/${genre._id}`}>{genre.name}</NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </Box>
      </Box>
    </Container>
  )
}
