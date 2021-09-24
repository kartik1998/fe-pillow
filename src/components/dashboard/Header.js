import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';

const navbarSx = { color: '#535B61', textTransform: 'none' };
function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', height: '1em' }}>
        <Container maxWidth="lg">
          <Button size="large">
            <b>PILLOW</b>
          </Button>
          <Button size="large" sx={navbarSx}>
            Dashboard
          </Button>
          <Button size="large" sx={navbarSx}>
            See Plans
          </Button>
          <Button size="large" sx={{ ...navbarSx, pl: '550px' }}>
            <NotificationsIcon />
          </Button>
          <Button size="large" sx={navbarSx}>
            Contact support
          </Button>
          <Button size="large" sx={navbarSx}>
            Sign out
          </Button>
        </Container>
      </Toolbar>{' '}
      <br />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
