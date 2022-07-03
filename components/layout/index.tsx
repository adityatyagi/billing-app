import { Box } from '@mui/material';
import Header from 'components/header';
import React, { ReactElement } from 'react';

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => (
  <>
    <Header />
    <Box
      sx={{
        marginTop: 10 // 56px is in the minimum width of the app bar
      }}
    >
      {children}
    </Box>
  </>
);

export default Layout;
