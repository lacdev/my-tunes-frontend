import { useNavigate } from 'react-router-dom'
import { Box, Grid, Paper } from '@mui/material'

export const Home = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    // Main Grid
    <Grid container my={2}>
      <Grid
        item
        xs={8}
        sx={{
          height: '600px',
          background: 'gray',
        }}
      >
        <h2>Featured Playlist</h2>
      </Grid>
      <Grid
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
      </Grid>
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
        }}
      >
        <h3>
          Fans have paid artists $924 million using MyTunes, and $198 million in
          the last year.
        </h3>
      </Grid>

      {/* Weeks albums and top 10 */}

      <Grid
        container
        xs={12}
        sx={{
          height: '1000px',
        }}
      >
        <Grid container item xs={8}>
          <Grid
            item
            xs={12}
            sx={{
              height: 'auto',
              background: 'gray',
            }}
          >
            <h2>This week's best release ever</h2>
          </Grid>
          <Grid
            container
            item
            xs={12}
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
        item
        mt={2}
        xs={12}
        sx={{
          height: '400px',
          background: 'orange',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Featured Pre Orders</h3>
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
            <h2>Acid Top Releases</h2>
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
            <h2>Alternative Top Releases</h2>
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
      </Grid>
    </Grid>
  )
}
