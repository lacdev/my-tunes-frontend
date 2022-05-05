import { useNavigate } from 'react-router-dom'
import { Box, Grid, Paper } from '@mui/material'

export const Home = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <Grid container>
      {/* <button>Place Order</button> */}
      <Grid
        item
        xs={2}
        sx={{
          height: '2500px',
        }}
      >
        <h2>Home Page</h2>
        Some content
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          height: '2500px',
        }}
      >
        <h2>Home Page</h2>
        Some content
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          height: '2500px',
        }}
      >
        <h2>Home Page</h2>
        Some content
      </Grid>
    </Grid>
  )
}
