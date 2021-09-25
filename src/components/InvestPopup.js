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
        <DialogTitle
          sx={{ pt: '30px', pl: '60px', pr: '60px', fontWeight: 'bold', pb: '40px' }}
          style={{ color: 'gray' }}
        >
          {' '}
          Invest in Securitas
          <Divider />
        </DialogTitle>

        <DialogContent sx={{ pb: '40px' }}>
          <DialogContentText>Amount in USDC</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="USDC" type="number" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions sx={{ pb: '20px' }}>
          <Box sx={{ pr: '60px' }}>
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
