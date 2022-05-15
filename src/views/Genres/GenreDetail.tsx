import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectGenre } from '../../features/genreSlice'
import { fetchGenre } from '../../services/Genre.services'

export const GenreDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { genreId } = useParams()

  const genre = useAppSelector(selectGenre)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGenre(genreId))
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
        {genre.loading && <div>Loading...</div>}
        {!genre.loading && genre.error ? <div>Error: {genre.error}</div> : null}
        {!genre.loading && genre ? (
          <Box>
            <Typography variant="h1">
              {genre.genre?.name} genre details
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Container>
  )
}
