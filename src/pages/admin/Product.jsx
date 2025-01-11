import React from "react";
import ProductTable from "../../components/UI/table/ProductTable";
import { Box, styled } from "@mui/system";
import { NavLink, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
const data = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 100.0,
    stock: 50,
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Clothing",
    price: 25.99,
    stock: 120,
    createdAt: "2024-02-15",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Books",
    price: 15.5,
    stock: 200,
    createdAt: "2024-03-01",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Toys",
    price: 19.99,
    stock: 80,
    createdAt: "2024-04-10",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Furniture",
    price: 200.0,
    stock: 30,
    createdAt: "2024-05-25",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Appliances",
    price: 150.75,
    stock: 45,
    createdAt: "2024-06-17",
  },
];
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value }) => `$${value.toFixed(2)}`,
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => new Date(value).toLocaleDateString(),
  },
];

const Product = () => {
  const { productId } = useParams();

  return (
    <WrapperMainBox>
      <FirstBox>
        <span>Товары »</span>
        <span>Детали товара</span>
        <StyledH2>Детали товары</StyledH2>
        <StyledHr />
        <StyledButtonDiv>
          <StyledNavLink to={`/admin/${productId}`} variant="contained">
            Товар
          </StyledNavLink>
          <StyledNavLink variant="contained">Детали Товара</StyledNavLink>
        </StyledButtonDiv>
        <ProductTable data={data} columns={columns} />
      </FirstBox>
    </WrapperMainBox>
  );
};

export default Product;
const WrapperMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  padding: 60px 120px;
  span {
    display: inline-block;
    padding-bottom: 30px;
  }
  span:first-of-type {
    color: grey;
  }
  span:nth-of-type(2) {
    font-weight: bold;
    margin-left: 6px;
  }
`;
const StyledHr = styled("hr")(() => ({
  width: "100%",
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "10px",
}));

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 16px",
  height: "36px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  textTransform: "uppercase",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",

  "&.active": {
    backgroundColor: "#384255",
  },

  "&:hover": {
    backgroundColor: "#1565c0",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },

  "&:active": {
    backgroundColor: "#0d47a1",
  },

  "&:focus": {
    outline: "none",
  },

  "&:not(.active)": {
    backgroundColor: "#E0E2E7",
    color: "#384255",
  },

  "&:disabled": {
    backgroundColor: "#e0e0e0",
    color: "#b0b0b0",
    cursor: "not-allowed",
  },
}));
const StyledButtonDiv = styled(Box)({
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  marginBottom: "30px",
});
