import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth='xl' component='main' sx={{ backgroundColor: 'aliceblue', height: '100vh', padding: '20px' }}>
      {children}
    </Container>
  );
}

export default Layout;
