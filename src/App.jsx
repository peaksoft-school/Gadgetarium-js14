import React from "react";
import AppRouter from "./routes/Approuter";
import Notification from "./components/UI/Toastify";

const App = () => {
  return (
    <div>
      <Notification />
      <AppRouter />
      <Notification />
    </div>
  );
};

export default App;

