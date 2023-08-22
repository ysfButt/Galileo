import React from 'react';
import { createTheme } from '@mui/material/styles';

// Components
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

// Layout
import LayoutRoutes from '../components/LayoutRoutes';


// Global theme for app
const theme = createTheme({
  palette: {
    primary: {
      main: '#343AC8',
    },
  },
});

const AppLayout = props => {
  const { routes } = props;
  
  return (
    <div className="layout">

      {/* Main Content */}
      <main className="main-content">

        {/* Main Header */}
        <MainHeader theme={theme} />
        {/* Main Header End */}

        {/* Layout Routes Or Pages To Render */}
        <LayoutRoutes {...props} routes={routes} theme={theme} />
        {/* Layout Routes Or Pages To Render End */}
        
        {/* Main Footer */}
        <MainFooter theme={theme} />
        {/* Main Footer End */}

      </main>
      {/* Main Content End */}

    </div>
  )
};

export default AppLayout;
