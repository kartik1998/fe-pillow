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

export default function RedeemPopup({ requestRecieved }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return requestRecieved ? redeem(open, handleClickOpen, handleClose) : redeem(open, handleClickOpen, handleClose);
}

function redeemRecieved(open, handleClickOpen, handleClose) {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Redeem
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ p: '50px', fontWeight: 'bold' }} style={{ color: 'gray' }}>
          {' '}
          Redeem from Securitas
          <Divider />
        </DialogTitle>

        <DialogContent sx={{ pb: '50px', pl: '50px' }}>
          <DialogContentText>
            Your request for withdrawal has <br /> been recieved. <br /> Withdrawal will be processed <br />
            to your wallet within 24hrs.{' '}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function redeem(open, handleClickOpen, handleClose) {
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
          <TextField autoFocus margin="dense" id="name" label="USDC" type="number" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions sx={{ pb: '20px' }}>
          <Box sx={{ pr: '100px' }}>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
          </Box>
          <Box sx={{ pr: '10px' }}>
            <Button onClick={handleClose} variant="outlined">
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
