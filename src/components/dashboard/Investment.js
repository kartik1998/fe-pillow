import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InvestPopup from './InvestPopup';
import RedeemPopup from './RedeemPopup';

const titleFont = {
  fontSize: '17px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: '550',
  color: '#2f363f',
  paddingBottom: '8px',
};

const overviewFont = {
  fontSize: '20px',
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
  p: { xs: 3, md: 2 },
  pr: { md: 0 },
};

function Main(props) {
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography style={titleFont} gutterBottom>
        {title}
      </Typography>
      <Divider /> <br />
      <Paper>
        <Grid container>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <img
                src="https://thumbs.dreamstime.com/b/black-chess-knight-background-chessboard-cells-figure-horse-symbol-concept-design-realistic-vector-illustration-147739836.jpg"
                alt="securitas"
                height="100px"
                width="70px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <Typography variant="p" style={overviewFont} paragraph>
                Securitas
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <Typography variant="p" style={descFont} gutterBottom>
                Investment
              </Typography>
              <Typography variant="p" style={valueFont} paragraph>
                $0.00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <Typography variant="p" style={descFont} gutterBottom>
                Returns
              </Typography>
              <Typography variant="p" style={valueFont} paragraph>
                $0.00
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <InvestPopup />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={boxSx}>
              <RedeemPopup />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
