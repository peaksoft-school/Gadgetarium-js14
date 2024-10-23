import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import {
  IconSamsung,
  IconiPhone,
  IconHuawei,
  IconHonor,
  IconXiaomi,
} from "../../assets/icon";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";

const brandOptions = {
  iPhone: {
    id: "1",
    image: IconSamsung,
    title: "Samsung",
  },
  apple: {
    id: "2",
    image: IconiPhone,
    title: "Apple",
  },
  huawei: {
    id: "3",
    image: IconHuawei,
    title: "Huawei",
  },
  honor: {
    id: "4",
    image: IconHonor,
    title: "Honor",
  },
  hiaomi: {
    id: "5",
    image: IconXiaomi,
    title: "Hiaomi",
  },
};

const DropDown = ({ label }) => {
  const [brand, setBrand] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "createNewBrand") {
      setOpenDialog(true);
    } else {
      setBrand(selectedValue);
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const brandArray = Object.values(brandOptions);

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={brand}
          label={label}
          onChange={handleChange}
          renderValue={(selected) => {
            const item = brandArray.find((brand) => brand.title === selected);
            return item ? (
              <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src={item.image} alt={selected} />
                {selected}
              </Box>
            ) : null;
          }}
        >
          {brandArray.length > 0 ? (
            brandArray.map((item) => (
              <StyledMenuItem
                sx={{ m: 1, minWidth: 396 }}
                key={item.id}
                value={item.title}
              >
                <img src={item.image} alt={item.title} />
                {item.title}
              </StyledMenuItem>
            ))
          ) : (
            <MenuItem disabled>Нет брендов</MenuItem>
          )}
          <MenuItem value="createNewBrand">+ Создать новый бренд</MenuItem>
        </Select>
      </FormControl>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Создать новый бренд</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <input type="text" />
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Сохранить</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DropDown;

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  gap: "16px",
}));
