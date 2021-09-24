import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from '@mui/material/Link';

const navbarSx = { color: '#535B61', textTransform: 'none' };
function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', height: '1em' }}>
        <Container maxWidth="lg">
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <Button size="large">
              <b>PILLOW</b>
            </Button>
          </Link>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <Button size="large" sx={navbarSx}>
              Dashboard
            </Button>
          </Link>
          <Link href="/plans" style={{ textDecoration: 'none' }}>
            <Button size="large" sx={navbarSx}>
              See Plans
            </Button>
          </Link>
          <Button size="large" sx={{ ...navbarSx, pl: '600px' }}>
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
