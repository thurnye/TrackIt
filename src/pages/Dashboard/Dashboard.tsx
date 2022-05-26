import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import styles from './Dashboard.module.scss';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Subscriptions from './Subscriptions/Subscriptions';
import AddSub from './AddSub/AddSub';
import NavStats from './NavStats/NavStats'
import { Carousel} from '../../components'

interface DashboardProps {
  user:any
  window?: () => Window;
}

const Dashboard: FC<DashboardProps> = (props:DashboardProps) => {
  const {user, window} = props
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState<number>(0)


  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar> 
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#d7d7d7',
              textDecoration: 'none',
            }}
          > DashBoard</Typography>
      </Toolbar>
      <Divider />
      <List>
        {[{
    text: 'Home',
    path: '/dashboard'
  },
    {
    text: 'Profile',
    path: 'dashboard/account'
  },
    {
    text: 'Manage subscriptions',
    path: 'dashboard/manage=subscriptions'
  },
    {
    text: 'Add Subscription',
    path: 'dashboard/add=subscription'
  },].map((el, index) => (
          <ListItem key={el.text} disablePadding onClick={() => setValue(index)} sx={{ color: index === value ? '#1976d2' : 'inherit'}}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <Icon
                baseClassName="fas"
                className="fa-duotone fa-house"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 1 && <Icon
                baseClassName="fas"
                className="fa-duatone fa-user"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 2 && <Icon
                baseClassName="fas"
                className="fa-solid fa-file-invoice-dollar"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
                {index === 3 && <Icon
                baseClassName="fas"
                className="fa-duotone fa-square-plus"
                sx={{ color: index === value ? '#1976d2' : 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
              </ListItemIcon>
              <ListItemText primary={el.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Preferences'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index === 0 && <Icon
                baseClassName="fas"
                className="fa-duotone fa-gears"
                sx={{ color: 'inherit', width:' 2rem'}}
                fontSize="small" 
              />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return(
    <div className={styles.Dashboard} data-testid="Dashboard">
      <div className={styles.Ellipse}>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleClick}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </IconButton>
      </div>
      <div className={styles.hamburger}>
        <IconButton
              color="success"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleClick}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </IconButton>
      </div>
      <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"start"}} >
        {/* <CssBaseline /> */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '56px' },
              
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '64px'  },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* MAIN */}
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, 
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
            textAlign:"initial", 
            p:1,
            // height: 'calc(100vh - 70px)',
            overflow: 'auto',
           }}
        >
          <Box className={styles.ShowNavStats}>
             {/* <NavStats/> */}
          </Box>

          <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 'fit-content',
            width: '20ch',
          },
        }}
      >
        <NavStats/>
        </Menu>
        {/* <Carousel/> */}
        {/* <Box sx={{border: '2px dotted red'}}>  */}
            {/* Home */}
            <Box sx={{display: value === 0 ? 'block': 'none', p: 2}}><Home/> </Box>

            {/* Profile */}
            <Box sx={{display: value === 1 ? 'block': 'none', p: 2}}><Profile/></Box>

              {/* Manage Sub */}
            <Box sx={{display: value === 2 ? 'block': 'none', p: 2}}><Subscriptions/></Box>

            {/* Add Sub */}
            <Box sx={{display: value === 3 ? 'block': 'none', p: 2}}><AddSub/></Box>
          </Box>
        {/* </Box> */}
      </Box>
      
    </div>
  )
};

export default Dashboard;
