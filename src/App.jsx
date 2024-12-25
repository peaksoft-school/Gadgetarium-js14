import { BrowserRouter } from "react-router-dom";
import ProductsSheetTable from "./pages/admin/ProductsSheetTable";
import AppRouter from "./routes/Approuter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
