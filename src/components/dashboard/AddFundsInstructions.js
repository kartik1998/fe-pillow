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

function AddFundsInstructions() {
  return (
    <Grid>
      <Paper variant="outlined">
        <Typography align="center" style={pillowFont} sx={{ paddingBottom: '30px', paddingTop: '7px' }}>
          How to get USDT & USDC?{' '}
        </Typography>

        <Box sx={{ pb: '20px', pl: '40px' }}>
          <Button variant="contained" sx={{ textTransform: 'none' }}>
            Step by step guide for INR deposits
          </Button>
        </Box>

        <Box sx={{ pb: '20px', pl: '27px' }}>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>
            Follow along the video for INR deposits
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default AddFundsInstructions;
