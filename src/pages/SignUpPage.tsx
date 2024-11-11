import { SignUpForm } from '@/components';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SignUpPage() {
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
          Sign Up
        </Typography>
        <SignUpForm />

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant='body2'>
            Already have an account?{' '}
            <Link to='/login' style={{ textDecoration: 'none', color: '#1976d2' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpPage;
