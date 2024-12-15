// import AppRouter from "./routes/Approuter";

import { BrowserRouter } from "react-router-dom";
import AdminProductComents from "./pages/admin/AdminProductComents";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AdminProductComents />
      </BrowserRouter>
    </div>
  );
};

export default App;
