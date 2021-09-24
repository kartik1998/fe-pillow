import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

const titleFont = {
  fontSize: '17px',
  fontFamily: `'Graphik Web Medium', sans-serif;`,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: '550',
  color: '#2f363f',
  paddingBottom: '8px',
};

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography style={titleFont} gutterBottom>
        {title}
      </Typography>
      <Divider />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
