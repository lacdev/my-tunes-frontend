import { useNavigate, Outlet, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { AdminDashboard } from '../AdminDashboard/AdminDashboard'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import AlbumIcon from '@mui/icons-material/Album'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import SettingsIcon from '@mui/icons-material/Settings'
import BarChartIcon from '@mui/icons-material/BarChart'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
  Paper,
} from '@mui/material'

export const Admin = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack

  let activeStyle = {
    fontWeight: '900',
    textDecoration: 'none',
    color: 'purple',
  }

  let notActiveStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '300',
  }

  return (
    <>
      <Grid xs={12} container maxWidth="xl" my={2}>
        <Grid container item xs={3} direction="column">
          <Paper
            sx={{
              width: '100%',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              // backgroundColor: '#efefef',
              backgroundColor: 'white',
              borderRadius: '16px',
            }}
            elevation={2}
          >
            <List>
              {/* <Divider /> */}
              <NavLink
                to="orders"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <ShoppingCartIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>

                    <ListItemText
                      primary="Orders"
                      // secondary="Show all orders"
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                to="users"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <PeopleIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                to="albums"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <AlbumIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Albums" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                to="songs"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <MusicNoteIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Songs" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                to="genres"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <QueueMusicIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Genres" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                to="settings"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <SettingsIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <Divider />
            </List>
          </Paper>
        </Grid>
        <Grid container item xs={9}>
          <Grid item xs={12}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'white',
                borderRadius: '16px',
                marginLeft: '16px',
              }}
              elevation={2}
            >
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
