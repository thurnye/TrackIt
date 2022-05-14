import React, { FC, useState } from 'react';import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import styles from './NavBar.module.scss';
import Icon from '@mui/material/Icon';
import {Button} from '../Button'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

interface NavBarProps {
  user:any
}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  const {user} = props
  // const [user, setUser] = useState<any>(loggedUser)


  const stringToColor = (string: string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  const stringAvatar = (name: string) => {
    return {
      sx: {
        // bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const handleSignOut = async () => {
    localStorage.clear()
    window.location.href = "/";
  }


  return (
    <div className={styles.NavBar} data-testid="NavBar">
       <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="a" href="/">
            <AdbIcon sx={{ mr: 1 , color: 'white'}} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              // flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > Track-It</Typography>
          
          <Box sx={{ flexGrow: 1, textAlign:'end', display: 'flex', justifyContent: "end", alignItems: "center"}}>
            {user ? <>
              <Tooltip title="loggedUser">
                <IconButton sx={{ p: 0 }}>
                  <Avatar {...stringAvatar('Kent Dodds')}  />
                </IconButton>
              </Tooltip>
              {/* <Button 
              label="SignOut"
              onClick={handleSignOut}
              variant="text"
              style={{color: "white"}}
              />  */}
              <Icon
                onClick={handleSignOut}
                baseClassName="fas"
                className="fa-right-from-bracket"
                sx={{ color: 'white', ml:2 }}
                fontSize="small" 
              />
            </>
            : <>
                <Login/>/<SignUp/>
              </>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
};

export default NavBar;
