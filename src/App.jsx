import React from 'react';
import AdminHeader from './components/UI/AdminHeader';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AdminHeader />
      </BrowserRouter>
    </div>
  );
};

export default App;
