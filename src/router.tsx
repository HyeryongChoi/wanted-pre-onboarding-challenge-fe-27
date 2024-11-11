import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Home } from './pages';

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
]);
