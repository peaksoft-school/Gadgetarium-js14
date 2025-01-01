import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { forwardRef, useState } from "react";
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
import { useSelector } from "react-redux";

const brandOptions = {
  iPhone: {
    id: "1",
    logo: IconSamsung,
    name: "Samsung",
  },
  apple: {
    id: "2",
    logo: IconiPhone,
    name: "Apple",
  },
  huawei: {
    id: "3",
    logo: IconHuawei,
    name: "Huawei",
  },
  honor: {
    id: "4",
    logo: IconHonor,
    name: "Honor",
  },
  hiaomi: {
    id: "5",
    logo: IconXiaomi,
    name: "Hiaomi",
  },
};

const DropDown = forwardRef(({ label, ...rest }, ref) => {
  const { brands } = useSelector((state) => state.categories);
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

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          ref={ref}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={brand}
          label={label}
          onChange={handleChange}
          renderValue={(selected) => {
            const item = brands.find((brand) => brand.name === selected);
            return item ? (
              <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <img src={item.logo} alt={selected} width={"24px"} />
                {selected}
              </Box>
            ) : null;
          }}
          {...rest}
        >
          {brands.length > 0 ? (
            brands.map((item) => (
              <StyledMenuItem
                sx={{ m: 1, minWidth: 396 }}
                key={item.id}
                value={item.name}
              >
                <img src={item.logo} alt={item.name} width={"24px"} />
                {item.name}
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
});

export default DropDown;

const StyledMenuItem = styled(MenuItem)(() => ({
  display: "flex",
  gap: "16px",
}));
