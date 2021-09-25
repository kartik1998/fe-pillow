import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/dashboard/Header';
import Overview from '../components/dashboard/Overview';
import Update from '../components/dashboard/Update';
import Investment from '../components/dashboard/Investment';
import PillowWallet from '../components/dashboard/PillowWallet';
import Footer from '../components/dashboard/Footer';
import addFundsFlow from '../assets/add_funds_flow.png';

const update = {
  description: `Pillow currently accepts USDT and USDC deposits on the Binance smart chain network and Ethereum network.`,
  image: 'https://greeneryfinancial.com/wp-content/uploads/2020/04/usdt-vs-usdc.png',
  imageLabel: 'USDT & USDC',
};

const theme = createTheme({
  shadows: ['none'],
});

export default function DashBoard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <main>
          <img src={addFundsFlow} width="1150px" style={{ paddingBottom: '20px' }} />
          <Grid container spacing={4}>
            <Update key={update.title} post={update} />
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Investment title="Your Investments" />
            <PillowWallet />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
