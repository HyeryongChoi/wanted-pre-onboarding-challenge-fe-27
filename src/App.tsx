import { Outlet, useNavigate } from 'react-router-dom';

import { Header, Layout } from '@/components/@common';
import TokenService from '@/utils/TokenService';

function App() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    TokenService.removeToken();
    goToLogin();
  };

  return (
    <>
      <Header
        title='Todo List'
        isLoggedIn={TokenService.getToken() ? true : false}
        onLogin={goToLogin}
        onLogout={handleLogout}
      />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
