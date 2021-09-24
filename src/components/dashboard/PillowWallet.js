import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const pillowFont = {
  fontSize: '18px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#1876D1',
  fontWeight: 'bold',
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
  fontWeight: 'bold',
};

const boxSx = {
  flex: 1,
  pl: '140px',
};

function Sidebar() {
  return (
    <Grid item xs={12} md={4}>
      <Paper variant="outlined">
        <Typography align="center" style={pillowFont} sx={{ paddingBottom: '30px', paddingTop: '7px' }}>
          Pillow Wallet{' '}
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bitcoin-wallet-3058908-2546445.png"
            height="25px"
            style={{ paddingTop: '12px' }}
          />
        </Typography>
        <Grid container sx={{ pl: '60px', pb: '30px' }}>
          <Grid item md={6}>
            <Typography style={descFont} gutterBottom>
              USDT Balance
            </Typography>
            <Typography variant="p" style={valueFont} paragraph sx={{ pl: '20px' }}>
              $0.00
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography style={descFont} gutterBottom>
              USDC Balance
            </Typography>
            <Typography variant="p" style={valueFont} paragraph sx={{ pl: '20px' }}>
              $0.00
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ pb: '20px', pl: '120px' }}>
          <Button variant="contained">Invest More</Button>
        </Box>

        <Box sx={{ pb: '20px', pl: '105px' }}>
          <Button variant="outlined">Withdraw Funds</Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Sidebar;
