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
import { colorPalette, colorPaletteWithIds } from "..";
import { Box, styled, width } from "@mui/system";
import { IconColor } from "../../../assets/icon";
import DropZone from "./DropZone";
import RadioButtonsForm from "./RadioButtonsForm";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../../../store/admin-addproduct/productsSlice";
import { postFile } from "../../../store/admin-addproduct/productsThunk";
import Loading from "../../UI/Loading";

const schema = yup.object().shape({
  color: yup.string().required("Цвет обязательно"),
  memorySize: yup.string().required("Выберите объём памяти"),
  strapMaterial: yup.string().required("Выберите материал браслета/ремешка"),
  caseMaterial: yup.string().required("Выберите материал корпуса"),
  watchSize: yup
    .number()
    .required("Укажите размер смарт-часов (mm)")
    .positive("Размер должен быть положительным числом"),
  displayDiagonal: yup
    .number()
    .required("Укажите диагональ дисплея")
    .transform((value) => (value === "" ? null : value))
    .positive("Диагональ должна быть положительным числом"),
  gender: yup.string().required("Пол обязателен"),
  confirm: yup.string().required("обязателен"),
  interfaces: yup.string().required("Выберите тип подписки"),
  bodyForm: yup.string().required("обязателен"),
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

const strapMaterials = [
  { value: "Кожа", label: "Кожа" },
  { value: "Силикон", label: "Силикон" },
  { value: "Металл", label: "Металл" },
  { value: "Нейлон", label: "Нейлон" },
];

const caseMaterials = [
  { value: "Алюминий", label: "Алюминий" },
  { value: "Нержавеющая сталь", label: "Нержавеющая сталь" },
  { value: "Титан", label: "Титан" },
  { value: "Пластик", label: "Пластик" },
];

const watchSizes = [
  { value: "38", label: "38 mm" },
  { value: "40", label: "40 mm" },
  { value: "42", label: "42 mm" },
  { value: "44", label: "44 mm" },
  { value: "46", label: "46 mm" },
];

const displayDiagonals = [
  { value: "1.2", label: "1.2 дюйма" },
  { value: "1.4", label: "1.4 дюйма" },
  { value: "1.6", label: "1.6 дюйма" },
  { value: "1.8", label: "1.8 дюйма" },
];

const WatchForm = ({ setNewValue }) => {
  const [file, setFile] = useState(null);
  const { isLoading, images } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      dataDropzone: [],
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const onSubmit = (data) => {
    const imageLinks = images.map((image) => image.link);
    const newProductData = {
      colour: data.color,
      characteristics: {
        memorySizes: data.memorySize,
        strapMaterial: data.strapMaterial,
        caseMaterial: data.caseMaterial,
        watchSize: data.watchSize,
        displayDiagonal: data.displayDiagonal,
        gender: data.gender,
        confirm: data.confirm,
        interfaces: data.interfaces,
        bodyForm: data.bodyForm,
        productId: Date.now(),
      },
      images: imageLinks,
      category: "smartWatch",
    };

    dispatch(setProductData(newProductData));
    setNewValue("2");
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
              {colorPalette.map((item) => (
                <Box
                  key={crypto.randomUUID()}
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: item.color,
                    cursor: "pointer",
                    border: "1px solid #ccc",
                  }}
                  onClick={() => {
                    setValue("color", item.value);
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
          <Typography variant="subtitle1">Материал браслета/ремешка</Typography>
          <Select
            {...register("strapMaterial")}
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
                Выберите материал браслета/ремешка
              </span>
            </MenuItem>
            {strapMaterials.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.strapMaterial && (
            <p style={{ color: "red" }}>{errors.strapMaterial.message}</p>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Материал корпуса</Typography>
          <Select
            {...register("caseMaterial")}
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
                Выберите материал корпуса
              </span>
            </MenuItem>
            {caseMaterials.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.caseMaterial && (
            <p style={{ color: "red" }}>{errors.caseMaterial.message}</p>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="subtitle1">"Размер смарт-часов (mm)"</Typography>
          <Select
            {...register("watchSize")}
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
              <span style={{ color: "#A9A9A9" }}>
                "Укажите размер смарт-часов (mm)"
              </span>
            </MenuItem>
            {watchSizes.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.watchSize && (
            <p style={{ color: "red" }}>{errors.watchSize.message}</p>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <Typography variant="subtitle1">Диагональ дисплея(дюйм)</Typography>
          <Select
            {...register("displayDiagonal")}
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
              <span style={{ color: "#A9A9A9" }}>
                Выберите Диагональ дисплея
              </span>
            </MenuItem>
            {displayDiagonals.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {errors.displayDiagonal && (
            <p style={{ color: "red" }}>{errors.displayDiagonal.message}</p>
          )}
        </FormControl>
      </Box>
      <RadioButtonsForm control={control} errors={errors} />
      <Box sx={{ width: "100%" }}>
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
      </Box>
    </form>
  );
};

export default WatchForm;

const StyledButtonBox = styled(Box)(() => ({
  width: "130px",
  marginLeft: "670px",
  marginTop: "20px",
}));
