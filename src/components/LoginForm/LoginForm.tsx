import { Box, Button, Stack, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';

import { useLogin } from '@/hooks/queries/auth';
import { isValidEmail } from '@/utils/validationUtils';

function LoginForm() {
  const { login } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const isValidForm = !(emailError || passwordError);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    validateEmail();
    validatePassword();

    if (emailError || passwordError) return;

    login({ email: email, password: password });
  };

  const validateEmail = () => {
    if (isValidEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address, including "@"');
    }
  };

  const validatePassword = () => {
    if (password.length >= 8) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 8 characters long');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={2}>
        <Box>
          <TextField
            label='Email'
            variant='outlined'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError.length > 0}
            helperText={emailError}
          />
        </Box>
        <Box>
          <TextField
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={passwordError.length > 0}
            helperText={passwordError}
          />
        </Box>

        <Box>
          <Button type='submit' variant='contained' color='primary' fullWidth disabled={!isValidForm}>
            Login
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default LoginForm;
