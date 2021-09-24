import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/dashboard/Header';
import Plan from '../components/dashboard/Plan';
import Update from '../components/dashboard/Update';
import Footer from '../components/dashboard/Footer';

const overview = {
  title: 'Securitas',
  description: 'A stable coin strategy for all market conditions',
};

const updates = [
  {
    title: 'BTC updates',
    description: `Experts believe that Bitcoin's rebound could provide a boost to the virtual coin market over the next few days.`,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F609a8e1aa40dd8d452a5e166%2FGetty-Images%2F960x0.jpg%3Ffit%3Dscale',
    imageLabel: 'BTC',
  },
  {
    title: 'ETH updates',
    description: `Ethereum 2.0 Includes Major Changes That Could End Bitcoin's Blockchain Dominance - By Andrej Kovačević`,
    image: 'https://static.india.com/wp-content/uploads/2021/02/ethereum.jpg?impolicy=Medium_Resize&w=1200&h=800',
    imageLabel: 'ETH',
  },
];

const theme = createTheme({
  shadows: ['none'],
});

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <main>
          <Plan post={overview} /> <br /> <br />
          <Grid container spacing={4}>
            {updates.map((post) => (
              <Update key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </ThemeProvider>
  );
}
