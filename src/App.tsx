import { Outlet } from 'react-router-dom';

import { Header, Layout } from '@/components/@common';

function App() {
  return (
    <>
      <Header title='Todo List' />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
