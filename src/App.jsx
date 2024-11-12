import React from 'react';
import InnerPageCard from './pages/admin/InnerPageCard';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <InnerPageCard />
      </BrowserRouter>
    </div>
  );
};

export default App;
