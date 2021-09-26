import React from 'react';
import Typography from '@mui/material/Typography';

const Address = () => {
  return (
    <>
      <Typography variant="subtitle1"> Address: {window.localStorage.getItem('inputWalletAddress')}</Typography> <br />
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
