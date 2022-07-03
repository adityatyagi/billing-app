import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => (
  <Box>
    <AppBar component="nav">
      <Toolbar>
        <Typography>Gulab Industries</Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
