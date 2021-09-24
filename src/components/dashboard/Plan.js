import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
  p: { xs: 3, md: 3 },
  pr: { md: 3 },
};
function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper variant="outlined">
      <Grid container>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <img
              src="https://thumbs.dreamstime.com/b/black-chess-knight-background-chessboard-cells-figure-horse-symbol-concept-design-realistic-vector-illustration-147739836.jpg"
              alt="securitas"
              height="150px"
              width="100px"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <Typography style={overviewFont} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="p" style={descFont} paragraph>
              {post.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <Typography style={{ ...overviewFont, color: 'green' }} gutterBottom>
              Risk Profile
            </Typography>
            <Typography variant="p" style={descFont} paragraph>
              ✔️ No Market risk
            </Typography>
            <Typography variant="p" style={descFont} paragraph>
              ✔️ All funds insured
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <Typography variant="p" style={overviewFont} gutterBottom sx={{ pt: '10px' }}>
              Minimum Amt
            </Typography>
            <Typography variant="p" style={valueFont} paragraph sx={{ pt: '10px' }}>
              US $1000
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <Typography variant="p" style={overviewFont} gutterBottom>
              Annualized Returns
            </Typography>
            <Typography variant="p" style={valueFont} paragraph sx={{ pt: '10px' }}>
              18%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={boxSx}>
            <Box sx={{ pb: '20px', flex: 1 }}>
              <Button variant="contained">Invest now</Button>
            </Box>
            <Box>
              <Button variant="outlined">Download fact sheet</Button>
            </Box>
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