// import { useState } from 'react'
// import { useAuth } from '../utils/auth'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'

import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'
import { userRegister, userSignIn } from '../../services/Auth.services'

export interface Register {
  username: string
  email: string
  password: string
}

export const Signup = () => {
  const [form, setForm] = useState<Register>({
    username: '',
    email: '',
    password: '',
  })

  console.log(form)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await userRegister(form)
    console.log('form component response', response)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
        }}
      >
        <Typography component="h2" variant="h3" textAlign="center">
          Discover Amazing Music
        </Typography>
        <Typography component="h1" variant="h6" mt={2}>
          Please register your new account.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            // variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              padding: '8px 32px ',
              fontSize: '16px',
              backgroundImage:
                'linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%)',
              // margin: '10px',
              // padding: '8px 32px',
              textAlign: 'center',
              // textTransform: 'lowercase',
              transition: '0.5s',
              backgroundSize: '200% auto',
              color: 'white',
              boxShadow: '0 0 20px #eee',
              borderRadius: '16px',
              display: 'block',
              '&:hover': {
                backgroundPosition: 'right center',
                color: '#fff',
                textDecoration: 'none',
              },
            }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Typography>
                Already have an account? <NavLink to="/login">Sign In</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
