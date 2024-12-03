import React from 'react'
import ProductsSheetTable from './pages/admin/ProductsSheetTable';
import ModalScitca from './pages/admin/ModalScitca';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return <BrowserRouter>
    <ProductsSheetTable />
  </BrowserRouter>;
};

export default App;
 