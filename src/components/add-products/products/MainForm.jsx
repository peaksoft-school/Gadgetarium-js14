import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import Input from "../../UI/Input";
import { Box, padding, styled } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import DropDown from "../../UI/DropDown";
import DatePicker from "../../UI/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import getSubCategories, {
  getCategories,
} from "../../../store/admin-addproduct/categoriesThunk";
import Button from "../../UI/Button";
import WatchForm from "./WatchForm";
import PhoneForm from "./PhoneForm";
import { setMainData } from "../../../store/admin-addproduct/productsSlice";
import Loading from "../../UI/Loading";
import LaptopForm from "./LaptopForm";
import TabletForm from "./TabletForm";
import { format } from "date-fns";
import dayjs from "dayjs";

const schema = yup.object().shape({
  category: yup.string().required("Категория обязательно"),
  brand: yup.string().required("Бренд обязательно"),
  title: yup.string().required("Название товара обязательно"),
  subCategory: yup.string().required("Подкатегория обязательно"),
  warranty: yup
    .number()
    .typeError("Гарантия должна быть числом")
    .required("Гарантия обязательно"),
  date: yup
    .date()
    .typeError("Дата выпуска должна быть валидной датой")
    .required("Дата выпуска обязательно"),
});

const MainForm = ({ setNewValue }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };
  const dispatch = useDispatch();
  const { categories, isLoading, subCategories } = useSelector(
    (state) => state.categories
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      category: "",
      brand: "",
      title: "",
      subCategory: "",
      guarantee: "",
      date: null,
    },
  });

  const [selectedForm, setSelectedForm] = useState(null);
  const selectedCategory = watch("category");

  const onSubmit = (data) => {
    const newProduct = {
      brandId: data.category,
      brand: data.brand,
      name: data.title,
      subCategoryId: data.subCategory,
      guarantee: data.warranty,
      dateOfIssue: formatDate(data.date),
      productId: Date.now(),
      size: 4,
    };

    dispatch(setMainData(newProduct));

    switch (selectedCategory) {
      case 1:
        setSelectedForm("smartphone");
        break;
      case 4:
        setSelectedForm("watch");
        break;
      case 3:
        setSelectedForm("laptop");
        break;
      case 2:
        setSelectedForm("tablet");
        break;
      default:
        setSelectedForm("");
    }
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return "Не указано";
    }
    return format(parsedDate, "yyyy-MM-dd");
  };
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getSubCategories(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", gap: "20px", "& div": { width: "400px" } }}>
          <div>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <StyledLabel>
                Выберите категорию
                {errors.category && <span style={{ color: "red" }}>*</span>}
              </StyledLabel>
              <Select
                {...register("category")}
                value={watch("category") || ""}
                fullWidth
                sx={{
                  ".MuiSelect-select": {
                    padding: "15px !important",
                  },
                }}
              >
                {categories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.category && (
                <p style={{ color: "red" }}>{errors.category.message}</p>
              )}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2, marginLeft: "-7px" }}>
              <Typography
                variant="subtitle1"
                sx={{ marginBottom: "-8px", marginLeft: "6px" }}
              >
                Бренд {errors.brand && <span style={{ color: "red" }}>*</span>}
              </Typography>
              <DropDown
                label="Бренд"
                value={watch("brand") || ""}
                sx={{
                  ".MuiOutlinedInput-input": {
                    padding: "16px !important",
                  },
                }}
                disabled={!watch("category")}
                {...register("brand")}
              />
              {errors.brand && (
                <p style={{ color: "red" }}>{errors.brand.message}</p>
              )}
            </FormControl>

            <Input
              placeholder="Введите название товара"
              {...register("title")}
              disabled={!watch("category")}
              label={
                <StyledLabel>
                  <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                    Название товара
                  </p>
                  {errors.title && <span style={{ color: "red" }}>*</span>}
                </StyledLabel>
              }
              sx={{
                ".MuiOutlinedInput-input": {
                  padding: "15px",
                },
              }}
            />
            {errors.title && (
              <p style={{ color: "red" }}>{errors.title.message}</p>
            )}
          </div>
          <div>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <StyledLabel>
                Выберите подкатегорию
                {errors.subCategory && <span style={{ color: "red" }}>*</span>}
              </StyledLabel>
              <Select
                {...register("subCategory")}
                disabled={!watch("category")}
                value={watch("subCategory") || ""}
                fullWidth
                sx={{
                  ".MuiSelect-select": {
                    paddingTop: "0px !important",
                    padding: "15px !important",
                  },
                }}
              >
                {subCategories.length === 0 ? (
                  <MenuItem disabled>Нет подкатегорий</MenuItem>
                ) : (
                  subCategories.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))
                )}
              </Select>
              {errors.subCategory && (
                <p style={{ color: "red" }}>{errors.subCategory.message}</p>
              )}
            </FormControl>
            <div style={{ paddingBottom: "15px" }}>
              <Input
                placeholder="Введите гарантию (в месяцах)"
                type="number"
                {...register("warranty")}
                disabled={!watch("category")}
                label={
                  <StyledLabel>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                      Гарантия (месяцев)
                    </p>
                    {errors.warranty && <span style={{ color: "red" }}>*</span>}
                  </StyledLabel>
                }
                sx={{
                  ".MuiOutlinedInput-input": {
                    padding: "15px",
                  },
                }}
              />
              {errors.warranty && (
                <p style={{ color: "red" }}>{errors.warranty.message}</p>
              )}
            </div>

            <FormControl fullWidth sx={{ mb: 2, marginTop: "6.5px" }}>
              <StyledLabel>
                Выберите дату выпуска
                {errors.date && <span style={{ color: "red" }}>*</span>}
              </StyledLabel>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    label="Дата выпуска"
                    value={field.value || null}
                    onChange={(newValue) => field.onChange(newValue)}
                    inputRef={field.ref}
                    disabled={!watch("category")}
                    maxDate={dayjs()}
                    {...field}
                    sx={{
                      ".MuiInputBase-root": {
                        padding: "0px",
                      },
                      ".MuiButtonBase-root ": {
                        marginLeft: "145px",
                      },
                    }}
                  />
                )}
              />
              {errors.date && (
                <p style={{ color: "red" }}>{errors.date.message}</p>
              )}
            </FormControl>
          </div>
        </Box>

        <StyledBox>
          <div>
            Продукт<span style={{ marginLeft: "2px" }}>{count}</span>
          </div>

          {isLoading && <Loading />}
          {!isLoading && (
            <Button
              variant="text"
              type="submit"
              onClick={handleButtonClick}
              disabled={!isValid}
            >
              + Добавить продукт
            </Button>
          )}
        </StyledBox>
      </form>

      {selectedForm === "smartphone" && <PhoneForm setNewValue={setNewValue} />}
      {selectedForm === "watch" && <WatchForm setNewValue={setNewValue} />}
      {selectedForm === "laptop" && <LaptopForm setNewValue={setNewValue} />}
      {selectedForm === "tablet" && <TabletForm setNewValue={setNewValue} />}
    </>
  );
};

export default MainForm;

const StyledBox = styled(Box)(() => ({
  width: "400px",
  display: "flex",
  paddingTop: "30px",
  paddingBottom: "30px",
  "& div": {
    width: "160px",
    height: "38px",
    borderRadius: "6px",
    border: "1px solid grey",
    textAlign: "center",
    paddingTop: "4.5px",
    color: "grey",
  },
}));

const StyledLabel = styled("div")(() => ({
  display: "flex",
  gap: "3px",
}));
