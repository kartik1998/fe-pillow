import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

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

const boxSx = {
  position: 'relative',
  pt: '20px',
  pl: '20px',
};

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        backgroundColor: '#F9FAFB',
        mb: 4,
        p: '8px',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={2.4}>
          <Box sx={boxSx}>
            <Typography style={overviewFont} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="p" style={descFont} paragraph>
              {post.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Box sx={boxSx}>
            <Typography variant="p" style={descFont} gutterBottom>
              Total Value
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              $0.00
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Box sx={boxSx}>
            <Typography variant="p" style={descFont} gutterBottom>
              Total Investment
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              __
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Box sx={boxSx}>
            <Typography variant="p" style={descFont} gutterBottom>
              Current returns
            </Typography>
            <Typography variant="p" style={valueFont} paragraph>
              __
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4} sx={{ pt: '8px' }}>
          <Box sx={boxSx}>
            <Link href="/plans">
              <Button variant="contained" sx={{ textTransform: 'none', pl: '30px', pr: '30px' }}>
                Discover Plans
              </Button>
            </Link>
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
