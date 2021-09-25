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
import { investOrRedeem } from '../../firebase/api';

export default function RedeemPopup() {
  const [open, setOpen] = React.useState(false);
  const [redeemValue, setRedeemValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmation = () => {
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    if (!userData.redeems) userData.redeems = [];
    userData.redeems.push({ redeemValue: `${redeemValue} USDC`, status: 'pending' });
    investOrRedeem(userData, redeemValue, 'Redeem');
    setOpen(false);
    setRedeemValue('');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Redeem
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ pt: '30px', pl: '60px', pr: '60px', fontWeight: 'bold', pb: '40px' }}
          style={{ color: 'gray' }}
        >
          {' '}
          Redeem from Securitas
          <Divider />
        </DialogTitle>

        <DialogContent sx={{ pb: '40px' }}>
          <DialogContentText>Amount in USDC</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={redeemValue}
            label="USDC"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setRedeemValue(e.target.value)}
          />
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
