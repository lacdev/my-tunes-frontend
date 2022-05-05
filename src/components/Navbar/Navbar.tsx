import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import LoginIcon from '@mui/icons-material/Login'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import AlbumIcon from '@mui/icons-material/Album'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const navLinkStyles = ({ isActive: any }) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'none' : 'underline',
  //   }
  // }

  return (
    <AppBar
      position="sticky"
      sx={{
        // background: 'linear-gradient(to right , #36EAEF, #6B0AC9)',
        background:
          'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);',
        color: '#2A2A2A',
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LibraryMusicIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          MyTunes Store
        </Typography>

        <Stack direction="row" spacing={2}>
          <NavLink
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                // color: 'white',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </NavLink>
          <NavLink
            to="/artists"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<GroupIcon />}
            >
              Artists
            </Button>
          </NavLink>
          <NavLink
            to="/genres"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<MusicNoteIcon />}
            >
              Genres
            </Button>
          </NavLink>
          <NavLink
            to="/albums"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<AlbumIcon />}
            >
              Albums
            </Button>
          </NavLink>
          <NavLink
            to="/songs"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<LibraryMusicIcon />}
            >
              Songs
            </Button>
          </NavLink>
          <NavLink
            to="/playlists"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<QueueMusicIcon />}
            >
              Playlists
            </Button>
          </NavLink>
          <NavLink
            to="/cart"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Cart
            </Button>
          </NavLink>
          <NavLink
            to="/user"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<AccountCircleIcon />}
            >
              Profile
            </Button>
          </NavLink>
          <NavLink
            to="/admin"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<AdminPanelSettingsIcon />}
            >
              Admin
            </Button>
          </NavLink>
          <NavLink
            to="/login"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              color="inherit"
              sx={{
                textDecoration: 'none',
                color: '#212121',
                // textTransform: 'none',
              }}
              startIcon={<LoginIcon />}
            >
              Sign In
            </Button>
          </NavLink>
        </Stack>
        {/* <Button
            color="inherit"
            id="resources-button"
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            Login
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
      </Toolbar>
    </AppBar>
  )
}

// import { NavLink } from 'react-router-dom'
// // import { useAuth } from '../utils/auth'

// export const NavBar = () => {
//   //   const auth = useAuth()

//   return (
//     <nav className="primary-nav">
//       {/* <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/products">Products</NavLink>
//       <NavLink to="/profile">Profile</NavLink>
//       {!auth.user && <NavLink to="/login">Login</NavLink>} */}
//     </nav>
//   )
// }

// // const navLinkStyles = ({ isActive: any }) => {
// //   return {
// //     fontWeight: isActive ? 'bold' : 'normal',
// //     textDecoration: isActive ? 'none' : 'underline',
// //   }
// // }

// // style={navLinkStyles}
// // style={navLinkStyles}
