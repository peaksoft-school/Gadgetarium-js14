import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Popover,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { colorPaletteWithIds } from "..";
import { Box, styled } from "@mui/system";
import { IconColor } from "../../../assets/icon";
import DropZone from "./DropZone";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../../../store/admin-addproduct/productsSlice";
import { postFile } from "../../../store/admin-addproduct/productsThunk";
import Loading from "../../UI/Loading";

const schema = yup.object().shape({
  color: yup.string().required("Цвет обязательно"),
  memorySize: yup.string().required("Выберите объём памяти"),
  ram: yup.string().required("Выберите оперативная память"),
  simCart: yup.string().required("Выберите SIM-карт"),
  dataDropzone: yup
    .array()
    .min(1, "Добавьте хотя бы одно изображение")
    .max(10, "Максимальное количество изображений — 10")
    .required("Добавьте хотя бы одно изображение"),
});

const memorySizes = [
  { value: "64GB", label: "64 GB" },
  { value: "128GB", label: "128 GB" },
  { value: "256GB", label: "256 GB" },
  { value: "512GB", label: "512 GB" },
];

const ramSizes = [
  { value: "4GB", label: "4 GB" },
  { value: "6GB", label: "6 GB" },
  { value: "8GB", label: "8 GB" },
  { value: "12GB", label: "12 GB" },
];

const simCards = [
  { value: "1", label: "1 SIM" },
  { value: "2", label: "2 SIM" },
];

const PhoneForm = ({ setNewValue }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product);

  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
    setValue,
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(getValues());

  const onSubmit = async (data) => {
    const newData = {
      color: data.color,
      characteristics: {
        memorySizes: data.memorySize,
        ram: data.ram,
        simCart: data.simCart,
        dataDropzone: data.dataDropzone,
        productId: Date.now(),
      },
      images: [],
      category: "smartPhone",
    };
    dispatch(setProductData(newData));
    setNewValue("2");
    reset();
  };

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const selectedColor = watch("color");

  useEffect(() => {
    if (file) {
      dispatch(postFile(file));
    }
  }, [file, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "400px" }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Основной цвет</Typography>
          <Box
            sx={{
              width: "400px",
              padding: "8px",
              border: "solid grey 1px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              ":active": {
                borderColor: "#ca11ac",
              },
            }}
            onClick={openPopover}
          >
            {selectedColor ? (
              <span>{selectedColor}</span>
            ) : (
              <span
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "#d0d2d3",
                }}
              >
                Основной цвет
              </span>
            )}
            <img
              src={IconColor}
              alt="Цветовая иконка"
              style={{ marginLeft: "auto" }}
            />
          </Box>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={closePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              sx={{
                width: "400px",
                p: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {colorPaletteWithIds.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: item.color,
                    cursor: "pointer",
                    border: "1px solid #ccc",
                  }}
                  onClick={() => {
                    setValue("color", item.color);
                    closePopover();
                  }}
                />
              ))}
            </Box>
          </Popover>

          {errors.color && (
            <p style={{ color: "red" }}>{errors.color.message}</p>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Объём памяти</Typography>
          <Select
            {...register("memorySize")}
            defaultValue=""
            displayEmpty
            sx={{
              height: "35px",
              ".MuiSelect-select": {
                padding: "0px !important",
                lineHeight: "35px",
                marginLeft: "10px",
              },
              "& .MuiSelect-root": {
                color: (theme) => theme.palette.text.primary,
              },
              "& .MuiSelect-placeholder": {
                color: "#A9A9A9",
              },
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "#A9A9A9" }}>Выберите объём памяти</span>
            </MenuItem>
            {memorySizes.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.memorySize && (
            <p style={{ color: "red" }}>{errors.memorySize.message}</p>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Оперативная память</Typography>
          <Select
            {...register("ram")}
            defaultValue=""
            displayEmpty
            sx={{
              height: "35px",
              ".MuiSelect-select": {
                padding: "0px !important",
                marginLeft: "10px",
                lineHeight: "35px",
              },
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "#A9A9A9" }}>
                Выберите оперативную память
              </span>
            </MenuItem>
            {ramSizes.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.ram && <p style={{ color: "red" }}>{errors.ram.message}</p>}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Кол-во SIM-карт</Typography>
          <Select
            {...register("simCart")}
            defaultValue=""
            displayEmpty
            sx={{
              height: "35px",
              ".MuiSelect-select": {
                padding: "0px !important",
                marginLeft: "10px",
                lineHeight: "35px",
              },
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "#A9A9A9" }}>Выберите SIM-карт</span>
            </MenuItem>
            {simCards.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.simCart && (
            <p style={{ color: "red" }}>{errors.simCart.message}</p>
          )}
        </FormControl>
      </Box>
      <DropZone control={control} errors={errors} setFile={setFile} />
      <StyledButtonBox>
        {isLoading ? (
          <Loading />
        ) : (
          <Button variant="contained" type="submit" disabled={isLoading}>
            Далее
          </Button>
        )}
      </StyledButtonBox>
    </form>
  );
};

export default PhoneForm;

const StyledButtonBox = styled(Box)(() => ({
  width: "130px",
  marginLeft: "670px",
  marginTop: "20px",
}));
