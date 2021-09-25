import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from '@mui/material/Link';
import { Redirect } from 'react-router-dom';
import { checkKYCStatus } from '../../firebase/kyc';

const navbarSx = { color: '#535B61', textTransform: 'none' };
function Header() {
  const [signedIn, setSignedIn] = React.useState(true);

  if (!signedIn || !localStorage.getItem('userData')) return <Redirect to="/login" />;
  if (!checkKYCStatus()) return <Redirect to="/completeKYC" />;
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
          <Link href="/addFunds" style={{ textDecoration: 'none' }}>
            <Button size="large" sx={navbarSx}>
              Add Funds
            </Button>
          </Link>
          <Button size="large" sx={{ ...navbarSx, pl: '500px' }}>
            <NotificationsIcon />
          </Button>
          <Button size="large" sx={navbarSx}>
            Contact support
          </Button>
          <Button
            size="large"
            sx={navbarSx}
            onClick={() => {
              localStorage.clear();
              setSignedIn(false);
            }}
          >
            Sign out
          </Button>
        </Container>
      </Toolbar>{' '}
      <br />
    </React.Fragment>
  );
}

export default Header;
