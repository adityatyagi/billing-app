import Header from 'components/header';
import React, { ReactElement } from 'react';

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => (
  <>
    <Header />
    <main className="relative">{children}</main>
  </>
);

export default Layout;
