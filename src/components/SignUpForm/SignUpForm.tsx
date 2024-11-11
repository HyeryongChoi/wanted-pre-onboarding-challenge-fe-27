import { Box, Button, Stack, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';

import { useSignUp } from '@/hooks/queries/auth';
import { isValidEmail, isValidStringLength } from '@/utils/validationUtils';

function SignUpForm() {
  const { signUp } = useSignUp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const isValidForm = !(emailError || passwordError || confirmPasswordError);

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();

    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (emailError || passwordError || confirmPasswordError) return;

    signUp({ email: email, password: password });
  };

  const validateEmail = () => {
    if (isValidEmail(email)) {
      setEmailError('');
    } else {
      setEmailError(`Please enter a valid email address, including '@'`);
    }
  };

  const validatePassword = () => {
    if (isValidStringLength(password)) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 8 characters long');
    }
  };

  const validateConfirmPassword = () => {
    if (password.length > 0 && password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
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
          <TextField
            label='Password Confirm'
            type='password'
            variant='outlined'
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            error={confirmPasswordError.length > 0}
            helperText={confirmPasswordError}
          />
        </Box>

        <Box>
          <Button type='submit' variant='contained' color='primary' fullWidth disabled={!isValidForm}>
            Sign Up
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default SignUpForm;
