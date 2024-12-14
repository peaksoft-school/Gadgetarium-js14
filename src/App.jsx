import { BrowserRouter } from "react-router-dom";
import ProductsSheetTable from "./pages/admin/ProductsSheetTable";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductsSheetTable />
      </BrowserRouter>
    </div>
  );
};

export default App;
