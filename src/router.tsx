import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />,
      },
      {
        path: ':id',
        element: <Home />,
      },
    ],
    errorElement: <div>Error</div>,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);
