import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/dashboard/Header';
import Footer from '../components/dashboard/Footer';
import addFundsFlow from '../assets/add_funds_flow.png';
import Address from '../components/dashboard/Address';
import AddFundsInstructions from '../components/dashboard/AddFundsInstructions';
import { Typography, Divider, Paper, Box, MenuItem, InputLabel, Select, FormControl } from '@mui/material';

const update = {
  description: `Pillow currently accepts USDT and USDC deposits on the Binance smart chain network and Ethereum network.`,
  image: 'https://greeneryfinancial.com/wp-content/uploads/2020/04/usdt-vs-usdc.png',
  imageLabel: 'USDT & USDC',
};

const theme = createTheme({
  shadows: ['none'],
});
const titleFont = {
  fontSize: '17px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: '550',
  color: '#2f363f',
  paddingBottom: '8px',
};

const overviewFont = {
  fontSize: '20px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: '550',
  color: '#2f363f',
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
};

const boxSx = {
  position: 'relative',
  p: { xs: 3, md: 2 },
  pr: { md: 0 },
};

export default function DashBoard() {
  const [coin, setCoin] = React.useState('USDT');

  const handleChange = (event) => {
    setCoin(event.target.value);
    console.log(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <main>
          <img src={addFundsFlow} width="1150px" />

          <Grid item xs={12} md={12}>
            <Paper>
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={7}>
                  <Box sx={boxSx}>
                    <Typography variant="subtitle1" paragraph>
                      Pillow curently accepts USDT and USDC deposits on the binance smart chain network and ethereum
                      network.
                    </Typography>
                  </Box>
                  <Box sx={{ pl: '220px' }}>
                    <Typography variant="h6" sx={{ pl: '45px' }}>
                      Select Coin
                    </Typography>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-label">Coin</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={coin}
                        label="coin"
                        onChange={handleChange}
                      >
                        <MenuItem value={'USDC'}>USDC</MenuItem>
                        <MenuItem value={'USDT'}>USDT</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ pl: '130px', pt: '30px' }}>
                    <Address />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={boxSx}>
                    <AddFundsInstructions />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </main>
      </Container>
      <br /> <br />
      <Footer />
    </ThemeProvider>
  );
}
