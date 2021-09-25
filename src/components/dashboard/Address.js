import React from 'react';
import Typography from '@mui/material/Typography';

const Address = () => {
  return (
    <>
      <Typography variant="subtitle1"> Address: 0xecBbBb7cdEbc3fBE0D80D66Ce4148Cd7528991D7</Typography> <br />
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        1. Send only USDT to this deposit address
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        2. Ensure the network is Binance Smart Chain (BEP20)
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        3. Please allow 60 minutes for transfer confirmation
      </Typography>
    </>
  );
};

export default Address;
