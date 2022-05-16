// import { useAuth } from '../utils/auth'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation, NavLink, Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ChangeEvent } from 'react'
import { userRegister, userSignIn } from '../../services/Auth.services'
import { loginThunk, selectAuth } from '../../features/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export interface Login {
  email: string
  password: string
}

export const Login = () => {
  const [form, setForm] = useState<Login>({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const auth = useAppSelector(selectAuth)

  console.log('auth from login', auth)

  const dispatch = useAppDispatch()

  // const { setAuth } = React.useContext(AuthContext)
  console.log(form)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await userSignIn(form)
    console.log('form component response', response)
  }
  if (auth.user) {
    navigate('/user', { replace: true })
  }

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
          Welcome Back
        </Typography>
        <Typography component="h1" variant="h6" mt={2}>
          Sign In with your account details.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            error={!form.email}
            value={form.email}
            helperText={
              !form.email ? 'Email is required' : 'Please type your email'
            }
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            error={!form.password}
            value={form.password}
            helperText={
              !form.password
                ? 'Password is required'
                : 'Do not share your password'
            }
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Typography>
                Don't have an account yet?{' '}
                <NavLink to="/signup">Sign Up</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
