import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { withdraw } from '../../firebase/api';

export default function WithDrawFunds() {
  const [open, setOpen] = React.useState(false);
  const [usdtValue, setUSDTValue] = React.useState('');
  const [usdcValue, setUSDCValue] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmation = () => {
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    if (!userData.withdrawals) userData.withdrawals = [];
    const usdc = usdcValue == '' ? 0 : usdcValue;
    const usdt = usdtValue == '' ? 0 : usdtValue;
    userData.withdrawals.push({
      address,
      usdcValue: `${usdc} USDC`,
      usdtValue: `${usdt} USDT`,
      status: 'pending',
    });
    withdraw(userData, usdc, usdt);
    setOpen(false);
    setUSDTValue('');
    setUSDCValue('');
    setAddress('');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Withdraw Funds
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ pt: '30px', pl: '60px', pr: '60px', fontWeight: 'bold', pb: '40px' }}
          style={{ color: 'gray' }}
        >
          {' '}
          Withdraw From Pillow
          <Divider />
        </DialogTitle>
        <DialogContent sx={{ pb: '10px' }}>
          <DialogContentText>Amount in USDT</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={usdtValue}
            label="USDC"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setUSDTValue(e.target.value)}
          />
        </DialogContent>
        <DialogContent sx={{ pb: '10px' }}>
          <DialogContentText>Amount in USDC</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={usdcValue}
            label="USDC"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setUSDCValue(e.target.value)}
          />
        </DialogContent>
        <DialogContent sx={{ pb: '10px' }}>
          <DialogContentText>Address</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={address}
            label="0x..."
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogContent sx={{ pb: '40px' }}>
          <DialogContentText>
            Please ensure that the withdrawal address <br />
            is on the binance smart chain network.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: '20px' }}>
          <Box sx={{ pr: '100px' }}>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
          </Box>
          <Box sx={{ pr: '10px' }}>
            <Button onClick={handleConfirmation} variant="outlined">
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
