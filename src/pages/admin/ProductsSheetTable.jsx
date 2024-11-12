import React, { useEffect } from "react";
import Input from "../../components/UI/Input";
import { Box, styled } from "@mui/material";
import Button from "../../components/UI/Button";
import Infografics from "../../components/UI/Infografics";
import ProductTable from "../../components/UI/table/ProductTable";
import { boxSizing, margin, width } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getProdates } from "../../store/productAdmin/productAdminAuthThank";
import AdminReview from "../../components/UI/admin/AdminReview";

const ProductsSheetTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productAdmin);

  useEffect(() => {
    dispatch(getProdates());
  }, []);

  console.log(products);
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Фото",
      accessor: "",
    },
    {
      Header: "Артикул",
      accessor: "",
    },
    {
      Header: "Наименования товара",
      accessor: "",
    },
    {
      Header: "Дата создания ",
      accessor: "createdAt",
    },
    {
      Header: "Кол-во",
      accessor: "",
    },
    {
      Header: "Цена товара",
      accessor: "",
    },
    {
      Header: "Текущая цена",
      accessor: "",
    },
    {
      Header: "Действия",
      accessor: "",
    },
  ];

  const data = [
    { id: 1, name: "Товар 1", price: "1000 руб.", category: "Категория A" },
    { id: 2, name: "Товар 2", price: "1500 руб.", category: "Категория B" },
    { id: 3, name: "Товар 3", price: "2000 руб.", category: "Категория C" },
  ];

  return (
    <Box sx={{ boxSizing: "border-box", margin: "0 auto" }}>
      <StyledContainer>
        <Box className="search-section">
          <Box className="input-and-buttons">
            <Input
              placeholder="Поиск по артикулу или ..."
              className="    -input"
            />
            <StyledButtonGroup>
              <StyledButton selected>Все товары</StyledButton>
              <StyledButton>В продаже</StyledButton>
              <StyledButton>В избранном</StyledButton>
              <StyledButton>В корзине</StyledButton>
            </StyledButtonGroup>
          </Box>

          <Box className="action-buttons">
            <Button variant="contained" className="add-product">
              ДОБАВИТЬ ТОВАР
            </Button>
            <Button variant="outlined" className="create-discount">
              СОЗДАТЬ СКИДКУ
            </Button>
          </Box>
          <Infografics />
        </Box>
        <Box>
          <StyledDivider />
        </Box>
        <Box>
          <BoxInputProject>
            <StyledInputTable type="date" />
            <StyledInputTable type="date" />
          </BoxInputProject>

          <StyledBoxTable>
            {/* <ProductTable data={data} columns={columns} /> */}
            <AdminReview/>
          </StyledBoxTable>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default ProductsSheetTable;

const BoxInputProject = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}));

const StyledInputTable = styled(Input)(() => ({
  width: "200px",
}));

const StyledBoxTable = styled(Box)(() => ({
  width: "1130px",
  marginTop: "90px",
}));

const StyledContainer = styled("div")({
  boxSizing: "border-box",
  margin: "0 auto",
  width: "100%",
  padding: "15px 30px",
  gap: "20px",
  fontFamily: "'Roboto', sans-serif",
  ".search-section": {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    gap: "20px",
  },
  ".input-and-buttons": {
    gap: "10px",
  },
  ".search-input": {
    width: "400px",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontSize: "14px",
    fontWeight: 400,
  },
  ".action-buttons": {
    display: "flex",
    // alignItems: "center",
    gap: "15px",
    "& .add-product": {
      width: "180px",
      height: "40px",
      backgroundColor: "#FF55AA",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
      fontSize: "14px",
    },
    "& .create-discount": {
      width: "180px",
      height: "40px",
      color: "#FF55AA",
      borderColor: "#FF55AA",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
  ".infographic-section": {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
});

const StyledDivider = styled("div")({
  borderTop: "2px solid #f0f0f0",
  width: "1090px",
  marginTop: "-140px",
});

const StyledButtonGroup = styled(Box)({
  display: "flex",
  padding: "10px",
  gap: "8px",
});

const StyledButton = styled("button")(({ selected }) => ({
  minWidth: "120px",
  padding: "10px 20px",
  backgroundColor: selected ? "#384255" : "#f0f0f0",
  color: selected ? "#fff" : "#333",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: selected ? "bold" : "normal",
  "&:hover": {
    backgroundColor: selected ? "#2c3445" : "#e6e6e6",
  },
}));
