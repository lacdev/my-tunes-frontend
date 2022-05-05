import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right , #36EAEF, #6B0AC9)',
        // background:
        //   'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);',
        // color: '#2A2A2A',
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '150px',
      }}
    >
      <Typography variant="body1">
        My sticky footer can be found here.
      </Typography>
    </Box>
  )
}

// <Box
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//   }}
// >
