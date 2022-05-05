import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Link,
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
import { NavLink } from 'react-router-dom'
import { CSSProperties } from '@emotion/serialize'

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [active, setActive] = useState<boolean>(false)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  let activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
  }

  let notActiveStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  // let activeClassName = 'underline'

  // const navLinkStyles = ({ isActive: any }) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'none' : 'underline',
  //   }
  // }

  //  style={navLinkStyles}

  // const navLinkStyles = ({ isActive: any }) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'none' : 'underline',
  //   }
  // }

  /*
  
  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
  
  */

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        // background: 'linear-gradient(to right , #36EAEF, #6B0AC9)',
        // background: 'transparent',
        // background: 'pink',
        background: 'rgba(255, 255, 255, 0.192)',
        // background:
        //   'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);',
        color: '#2A2A2A',
        // color: 'gray',
        backdropFilter: 'blur(20px)',
        borderRadius: '25px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavLink to="/">
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            sx={{
              color: 'black',
            }}
          >
            <LibraryMusicIcon />
          </IconButton>
        </NavLink>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            MyTunes
          </NavLink>
        </Typography>

        <Stack direction="row" spacing={2}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="artists"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Artists
          </NavLink>
          <NavLink
            to="genres"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Genres
          </NavLink>
          <NavLink
            to="albums"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Albums
          </NavLink>
          <NavLink
            to="playlists"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Playlists
          </NavLink>
          <NavLink
            to="songs"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Songs
          </NavLink>
          <NavLink
            to="user"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Profile
          </NavLink>
          <NavLink
            to="admin"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Admin
          </NavLink>
          <NavLink
            to="cart"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Cart
          </NavLink>
          <NavLink
            to="login"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            SignIn
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
