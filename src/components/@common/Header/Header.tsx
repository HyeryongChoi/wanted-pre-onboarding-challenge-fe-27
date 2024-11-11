import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';

interface HeaderProps {
  title?: string;
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export default function Header(props: HeaderProps) {
  const { title = '', isLoggedIn = false, onLogin = () => {}, onLogout = () => {} } = props;

  useEffect(() => {
    if (!isLoggedIn) onLogin();
  }, [isLoggedIn, onLogin]);

  return (
    <AppBar
      position='static'
      sx={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h4' component='div' fontWeight='bold' color='black'>
          {title}
        </Typography>

        {isLoggedIn ? (
          <Button sx={{ color: 'black' }} onClick={onLogout}>
            Logout
          </Button>
        ) : (
          <Button sx={{ color: 'black' }} onClick={onLogin}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
