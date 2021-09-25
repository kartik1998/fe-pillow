import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Invest
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pt: '30px', pl: '60px', pr: '60px', fontWeight: 'bold' }} style={{ color: 'gray' }}>
          {' '}
          Invest in Securitas
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>Amount in USDC</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="USDC" type="number" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions sx={{ pb: '20px' }}>
          <Button onClick={handleClose} sx={{ pr: '100px' }}>
            Cancel
          </Button>
          <Button onClick={handleClose} sx={{ pr: '20px' }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
