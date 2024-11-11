import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { LoginForm } from '@/components';
import TokenService from '@/utils/TokenService';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = TokenService.getToken() ? true : false;

    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 112px)',
      }}
    >
      <Box
        sx={{
          minWidth: '40%',
          maxWidth: '100%',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant='h5'
          component='h2'
          sx={{
            marginBottom: 2,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Login
        </Typography>
        <LoginForm />
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant='body2'>
            Don't have an account?{' '}
            <Link to='/sign-up' style={{ textDecoration: 'none', color: '#1976d2' }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
