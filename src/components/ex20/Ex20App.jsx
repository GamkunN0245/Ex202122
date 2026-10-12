import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';

const Ex20App = () => {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <div style={{ padding: '20px' }}>
          <Routes>
            {renderRoutes()}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Ex20App;