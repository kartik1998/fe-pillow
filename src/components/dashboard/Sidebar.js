import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const pillowFont = {
  fontSize: '18px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#1876D1',
  fontWeight: 'bold',
};

const usdtFont = {
  fontSize: '26px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#ADD8E6',
};

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper variant="outlined">
        <Typography align="center" style={pillowFont} sx={{ paddingBottom: '50px', paddingTop: '7px' }}>
          Pillow Wallet{' '}
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bitcoin-wallet-3058908-2546445.png"
            height="25px"
            style={{ paddingTop: '12px' }}
          />
        </Typography>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
