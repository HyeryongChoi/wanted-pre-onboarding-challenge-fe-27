import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { loginUser, postUser } from '@/apis/auth';
import TokenService from '@/utils/TokenService';

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signUp, ...restMutation } = useMutation({
    mutationFn: postUser,
    onSuccess: (response) => {
      if (response?.token) TokenService.setToken(response.token);

      alert('Sign up successful');

      navigate('/');
    },
  });

  return { signUp, ...restMutation };
};

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, ...restMutation } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      if (response?.token) TokenService.setToken(response.token);

      navigate('/');
    },
  });

  return { login, ...restMutation };
};
