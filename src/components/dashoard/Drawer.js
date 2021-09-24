import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const drawerWidth = 230;
const listItemStyle = {
  fontFamily: `"Gill Sans Extrabold", sans-serif`,
  fontSize: 15,
  fontWeight: 600,
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img
          src="https://uploads-ssl.webflow.com/6145c701c5ffca0e7b5781b8/614ac4912e6d2846556f12e3_Horizontal-Logo.svg"
          alt="Pillow"
          height="29"
          width="140"
        />
      </Toolbar>
      <Divider />
      <List>
        <ListItem button key={'Users'}>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography type="body2" style={listItemStyle}>
                Users
              </Typography>
            }
          />
        </ListItem>
        <ListItem button key={'See Plans'}>
          <ListItemIcon>
            <LightbulbTwoToneIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography type="body2" style={listItemStyle}>
                See Plans
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={'Contact us'}>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography type="body2" style={listItemStyle}>
                Contact us
              </Typography>
            }
          />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={1} style={{ background: 'white' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div" style={{ ...listItemStyle, fontSize: '18px' }}>
            Dashboard
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Sample</Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
