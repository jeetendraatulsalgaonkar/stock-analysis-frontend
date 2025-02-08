import { CSSObject } from "@mui/system";
import './NavigationDrawer.css';
import { useState } from "react";
import {
  Box,
  CssBaseline, Divider, Grid2,
  List,
  ListItem,
  ListItemButton, ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import {
  Bookmarks,
  HomeRounded,
  ListAlt,
  Message, NotAccessible,
  Notifications, People, Person, Settings, ShowChart,
} from '@mui/icons-material';
import ListItemLink from '../ListItemLink/ListItemLink';

const drawerWidth = 240;

const PrimaryMenu: string[] = ['Home', 'Stocks', 'Notifications', 'Messages', 'Lists', 'Bookmarks', 'Communities'];
const UserMenu: string[] = ['Profile', 'Settings'];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const NavigationDrawer = (): JSX.Element => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(true);
  };

  const getIconComponent = (text: string) => {
    switch (text) {
      case 'Home':
        return <HomeRounded />;
      case 'Stocks':
        return <ShowChart />;
      case 'Notifications':
        return <Notifications />;
      case 'Messages':
        return <Message />;
      case 'Lists':
        return <ListAlt />;
      case 'Bookmarks':
        return <Bookmarks />;
      case 'Communities':
        return <People />;
      case 'Profile':
        return <Person />;
      case 'Settings':
        return <Settings />;
      default:
        return <NotAccessible />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={true}>
        <List>
          <ListItem
            key='bleeter-logo'
            disablePadding sx={{
            display: 'list-item',
            paddingBottom: '4em',
            paddingTop: '2em',
          }}
            onClick={(open) ? handleDrawerClose: handleDrawerOpen}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ShowChart />
              </ListItemIcon>
              <ListItemText primary='Stocks' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          {PrimaryMenu.map((text: string) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemLink primary={text} to={`/${text.toLowerCase()}`} icon={getIconComponent(text)} open={open} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {UserMenu.map((text: string) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemLink primary={text} to={`/${text.toLowerCase()}`} icon={getIconComponent(text)} open={open} />
            </ListItem>
          ))}
        </List>
        <Grid2 sx={{ height: '100%' }} onClick={(open) ? handleDrawerClose: handleDrawerOpen} />
      </Drawer>
    </Box>
  );
};

export default NavigationDrawer;
