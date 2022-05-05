import { useNavigate } from 'react-router-dom'
import { Container, Box, Typography } from '@mui/material'

export const NotFound = () => {
  const navigate = useNavigate()
  // {replace: true} to replace the history in the stack
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">There was an error.</Typography>
        <Box m={6}>
          <button onClick={() => navigate('/')}>Go back to home</button>
        </Box>
      </Box>
    </Container>
  )
}
