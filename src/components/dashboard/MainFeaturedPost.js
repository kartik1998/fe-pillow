import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const overviewFont = {
  fontSize: '23px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: '550',
  color: '#2f363f',
};

const valueFont = {
  fontSize: '21px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#2f363f',
};

const descFont = {
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  color: '#81878B',
};

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#F9FAFB',
        color: '#F9FAFB',
        mb: 3,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: '#F9FAFB',
        }}
      />
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 3 },
              pr: { md: 0 },
            }}
          >
            <Typography style={overviewFont} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="p" style={descFont} paragraph>
              {post.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 3 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="p" style={descFont} gutterBottom>
              Total Value
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              $0.00
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 3 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="p" style={descFont} gutterBottom>
              Total Investment
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              __
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 3 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="p" style={descFont} gutterBottom>
              Current returns
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              __
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
