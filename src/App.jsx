import React, { useState } from "react";
import MyDatePicker from "./components/UI/DatePicker";

const App = () => {
  const [date, setDate] = useState();

  const changeDate = (newVal) => {
    console.log(newVal);
  };

  return (
    <div>
      <h1>Gadgetarium</h1>
      <MyDatePicker onChange={changeDate} />
    </div>
  );
};

export default App;
