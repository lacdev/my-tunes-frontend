import { useNavigate } from 'react-router-dom'
import { Box, Grid, Paper, Typography } from '@mui/material'
import banner1 from '../../assets/HomePage/best-dj-releases.png'
import banner2 from '../../assets/HomePage/best-of-house-2022-banner.png'
import banner3 from '../../assets/HomePage/this-month-best-vinyl.png'
import banner4 from '../../assets/HomePage/weekly-techno-releases.png'

export const Home = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    // Main Grid
    <Grid container my={2} alignItems="center" justifyContent="center">
      <Grid
        item
        xs={11}
        sx={{
          minHeight: 'fit-content',
          background: 'transparent',
        }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: '16px',
            width: '100%',
            height: 'auto',
          }}
          src={banner2}
          alt="featured playlist"
        ></Box>
      </Grid>
      {/* <Grid
        container
        item
        xs={4}
        sx={{
          height: '600px',
          background: 'red',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            background: 'blue',
          }}
        >
          <h2>Featured Playlist 2</h2>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            background: 'purple',
          }}
        >
          <h2>Featured Playlist 3</h2>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            background: 'pink',
          }}
        >
          <h2>Featured Playlist 4</h2>
        </Grid>
      </Grid> */}
      <Grid
        my={2}
        item
        xs={12}
        sx={{
          height: '100px',
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '16px',
        }}
      >
        <Box
          sx={{
            borderRadius: '16px',
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Fans have paid artists $924 million using MyTunes, and $198 million
            in the last year.
          </Typography>
        </Box>
      </Grid>

      {/* Weeks albums and top 10 */}

      <Grid
        container
        xs={12}
        sx={{
          height: 'fit-content',
        }}
      >
        <Grid container item xs={8}>
          <Grid
            item
            xs={11}
            sx={{
              height: 'fit-content',
              background: 'transparent',
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: '16px',
                width: '100%',
                height: 'auto',
              }}
              src={banner1}
              alt="featured playlist"
            ></Box>
          </Grid>
          <Grid
            container
            item
            xs={11}
            sx={{
              height: 'auto',
              background: 'yellow',
            }}
          >
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'yellow',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'blue',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'green',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'pink',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'purple',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: 'auto',
                background: 'pink',
              }}
            >
              <h2>Top week album item</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 'auto',
            background: 'blue',
          }}
        >
          <h2>Top 10 Tracks</h2>
        </Grid>
      </Grid>

      {/* Featured Pre Orders Releases */}

      <Grid
        mt={2}
        item
        xs={11}
        sx={{
          minHeight: 'fit-content',
          background: 'transparent',
        }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: '16px',
            width: '100%',
            height: 'auto',
          }}
          src={banner3}
          alt="featured playlist"
        ></Box>
      </Grid>

      {/* Top releases grid */}

      <Grid
        container
        item
        xs={12}
        my={2}
        sx={{
          height: 'auto',
          background: 'white',
        }}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          columnGap={4}
          xs={12}
          my={2}
          sx={{
            height: 'auto',
            background: 'pink',
          }}
        >
          <Grid item xs={12}>
            <h2>Electro Top Releases</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'blue',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'purple',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'green',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'gray',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'orange',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          columnGap={4}
          xs={12}
          my={2}
          sx={{
            height: 'auto',
            background: 'pink',
          }}
        >
          <Grid item xs={12}>
            <h2>House Top Releases</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'blue',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'purple',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'green',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'gray',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'orange',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          columnGap={4}
          xs={12}
          my={2}
          sx={{
            height: 'auto',
            background: 'pink',
          }}
        >
          <Grid item xs={12}>
            <h2>Techno Top Releases</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'blue',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'purple',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'green',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'gray',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: '250px',
              background: 'orange',
            }}
          >
            <h2>Top Techno Release Item</h2>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
