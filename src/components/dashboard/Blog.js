import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import PillowWallet from './PillowWallet';
import Footer from './Footer';

const mainFeaturedPost = {
  title: 'Overview',
  description: 'Your pillow investments',
};

const featuredPosts = [
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
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Your Investments" />
            <PillowWallet />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
