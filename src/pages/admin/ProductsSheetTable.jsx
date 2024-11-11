import React from "react";
import Input from "../../components/UI/Input";
import { Box, styled } from "@mui/material";
import Button from "../../components/UI/Button";
import Infografics from "../../components/UI/Infografics";
import ProductTable from "../../components/UI/table/ProductTable";

const ProductsSheetTable = () => {
  // Определение данных и колонок для таблицы
  const columns = [
    {
      Header: "ID",
      accessor: "id", // ключ для доступа к значению в `data`
    },
    {
      Header: "Название",
      accessor: "name",
    },
    {
      Header: "Цена",
      accessor: "price",
    },
    {
      Header: "Категория",
      accessor: "category",
    },
  ];

  const data = [
    { id: 1, name: "Товар 1", price: "1000 руб.", category: "Категория A" },
    { id: 2, name: "Товар 2", price: "1500 руб.", category: "Категория B" },
    { id: 3, name: "Товар 3", price: "2000 руб.", category: "Категория C" },
    // добавьте больше товаров по необходимости
  ];

  return (
    <StyledContainer>
      <Box className="search-section">
        <Box className="input-and-buttons">
          <Input placeholder="Поиск по артикулу или ..." className="search-input" />
          <StyledButtonGroup>
            <StyledButton selected>Все товары</StyledButton>
            <StyledButton>В продаже</StyledButton>
            <StyledButton>В избранном</StyledButton>
            <StyledButton>В корзине</StyledButton>
          </StyledButtonGroup>
        </Box>

        <Box className="action-buttons">
          <Button variant="contained" className="add-product">
            Добавить товар
          </Button>
          <Button variant="outlined" className="create-discount">
            Создать скидку
          </Button>
        </Box>
      </Box>
      <StyledDivider />

      <Box>
        {/* Передача данных в компонент ProductTable */}
        <ProductTable data={data} columns={columns} />
      </Box>

      {/* <Box className="infographic-section">
        <Infografics />
      </Box> */}
    </StyledContainer>
  );
};

export default ProductsSheetTable;

const StyledContainer = styled("div")({
  width: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  ".search-section": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
  },
  ".input-and-buttons": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  ".search-input": {
    width: "550px",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  ".action-buttons": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "& .add-product": {
      width: "200px",
      height: "50px",
      backgroundColor: "#ff55aa",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
    },
    "& .create-discount": {
      width: "200px",
      height: "50px",
      color: "#ff55aa",
      borderColor: "#ff55aa",
      borderRadius: "8px",
      fontWeight: "bold",
    },
  },
  ".infographic-section": {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
});

const StyledDivider = styled("div")({
  borderTop: "1px solid #ddd",
  width: "100%",
  margin: "20px 0",
});

const StyledButtonGroup = styled(Box)({
  display: "flex",
  gap: "10px",
});

const StyledButton = styled("button")(({ selected }) => ({
  width: "100px",
  padding: "8px",
  backgroundColor: selected ? "#384255" : "#f0f0f0",
  color: selected ? "#fff" : "#333",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: selected ? "#2c3445" : "#e0e0e0",
  },
}));
