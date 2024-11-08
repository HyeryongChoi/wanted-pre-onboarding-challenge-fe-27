import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth='xl' component='main' sx={{ height: '100vh', padding: 3 }}>
      {children}
    </Container>
  );
}

export default Layout;
