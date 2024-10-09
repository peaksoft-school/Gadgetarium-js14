import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const brandOptions = {
  iPhone: {
    id: "1",
    image: "",
    title: "iPhone",
  },
  apple: {
    id: "2",
    image: "",
    title: "Apple",
  },
  huawei: {
    id: "3",
    image: "",
    title: "Huawei",
  },
  honor: {
    id: "4",
    image: "",
    title: "Honor",
  },
  hiaomi: {
    id: "5",
    image: "",
    title: "Hiaomi",
  },
};

const DropDown = ({ label }) => {
  const [brand, setBrand] = useState("");

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  // Преобразуем объект в массив значений
  const brandArray = Object.values(brandOptions);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={brand}
        label={label}
        onChange={handleChange}
      >
        {brandArray.length > 0 ? (
          brandArray.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Нет брендов</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default DropDown;
