import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Card from "../UI/Card";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneOrder,
  getOrderHistory,
} from "../../store/account-order-history/orderHistoryThunk";

const data = {
  orderNumber: "12345",
  orderedProducts: [
    {
      subProductId: 101,
      image: "https://example.com/product-image.jpg",
      quantity: 2,
      productInfo: "Смартфон iPhone 14",
      rating: 5,
      price: 1000,
      discount: 10,
    },
    {
      subProductId: 102,
      image: "https://example.com/product-image2.jpg",
      quantity: 1,
      productInfo: "Наушники AirPods Pro",
      rating: 4,
      price: 250,
      discount: 20,
    },
  ],
  status: "Ожидание",
  client: "Иван Иванов",
  firstName: "Иван",
  region: "Московская область",
  address: "ул. Ленина, д. 5, кв. 10",
  tel_number: "+7 999 123 45 67",
  email: "ivan.ivanov@example.com",
  date: "2025-01-06",
  payment_type: "Credit Card",
  lastName: "Иванов",
  city: "Москва",
  discountPrice: 50,
  totalPrice: 1450,
};

const leftData = [
  { label: "Клиент", value: data.client },
  { label: "Имя", value: data.firstName },
  { label: "Область/регион", value: data.region },
  { label: "Адрес", value: data.address },
  { label: "Телефон", value: data.tel_number },
  { label: "Email", value: data.email },
];
const rightData = [
  { label: "Дата", value: data.date },
  { label: "Способ оплаты", value: data.payment_type },
  { label: "Фамилия", value: data.lastName },
  { label: "Город", value: data.city },
];

const rows = [
  {
    date: data.date,
    number: data.orderNumber,
    status: data.status,
    price: data.totalPrice,
  },
];

const OrderHistoryTable = ({ selectedOrder, setSelectedOrder }) => {
  const { orderHistory, oneOrder } = useSelector((state) => state.orderHistory);

  const dispatch = useDispatch();
  console.log("DATA:", orderHistory);
  console.log("IDOrder:", oneOrder);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  const orderId = "1";
  useEffect(() => {
    if (orderId) {
      dispatch(getOneOrder(orderId));
    }
  }, [dispatch, orderId]);

  const handleRowClick = (row) => {
    setSelectedOrder(row.number === selectedOrder ? null : row.number);
  };
  return (
    <div style={{ width: "100%" }}>
      {!selectedOrder && (
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#f4f4f4",
            width: "55%",
            boxShadow: "none",
            borderRadius: "none",
          }}
        >
          <Table
            sx={{
              border: "none !important",
              "& .MuiTableContainer-root": {
                boxShadow: "none",
              },
            }}
          >
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} onClick={() => handleRowClick(row)}>
                  <StyledTableCell>{row.date}</StyledTableCell>
                  <StyledTableCell>{row.number}</StyledTableCell>
                  <StyledTableCell>
                    <StatusText status={row.status}>{row.status}</StatusText>
                  </StyledTableCell>
                  <StyledTableCell>{row.price}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {selectedOrder && (
        <Box>
          <StyledH2>№ {data.orderNumber}</StyledH2>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              marginBottom: "20px",
            }}
          >
            {data.orderedProducts.map((product) => (
              <Box key={product.subProductId} sx={{ width: "220px" }}>
                <Card
                  img={product.image}
                  text={product.productInfo}
                  reiting={product.rating}
                  newPrice={product.price}
                  type="viewed"
                />
              </Box>
            ))}
          </Box>
          <StyledTextDiv>
            <p>Статус</p>
            <p></p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "10px",
              }}
            >
              <StyledBtn variant="waiting">В ожидании</StyledBtn>
              <StyledBtn variant="progressing">В обработке</StyledBtn>
            </div>
          </StyledTextDiv>
          <StyledContainer>
            <StyledColumn>
              {leftData.map(({ label, value }, index) => (
                <StyledTextDiv key={index}>
                  <p>{label}</p>
                  <p>{value}</p>
                </StyledTextDiv>
              ))}
              <div style={{ paddingTop: "20px" }}>
                <div>
                  <StyledSalesP>Скидка:{data.discountPrice}</StyledSalesP>
                  <StyledSalesSpan>Итого:{data.totalPrice}</StyledSalesSpan>
                </div>
              </div>
            </StyledColumn>
            <StyledColumn>
              {rightData.map(({ label, value }, index) => (
                <StyledTextDiv key={index}>
                  <p>{label}</p>
                  <p>{value}</p>
                </StyledTextDiv>
              ))}
            </StyledColumn>
          </StyledContainer>
        </Box>
      )}
    </div>
  );
};

export default OrderHistoryTable;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "none",
  boxShadow: "none",
  borderBottom: "1px solid #e0e0e0",
  fontFamily: "Poppins, sans-serif",
  "&:nth-of-type(1)": {
    fontWeight: "normal",
    fontSize: "14px",
  },
  "&:nth-of-type(2)": {
    fontWeight: "bold",
  },
  "&:nth-of-type(3)": {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
  "&:nth-of-type(4)": {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "14px",
  },
}));

const StatusText = styled(Typography)(({ status }) => ({
  color:
    status === "Доставлен"
      ? "#299A0D"
      : status === "Отменен"
      ? "#F53B49"
      : status === "В пути"
      ? "#08A592"
      : status === "Ожидание"
      ? "#F2A900"
      : "black",
}));

const StyledH2 = styled("h2")(() => ({
  fontWeight: "500px",
  fontFamily: "sans-serif",
  fontSize: "30px",
  lineHeight: "33px",
  paddingBottom: "10px",
  paddingTop: "30px",
}));

const StyledContainer = styled("div")(() => ({
  width: "50%",
  display: "flex",
  justifyContent: "space-between",
}));

const StyledColumn = styled("div")(() => ({
  flex: "1",
}));

const StyledTextDiv = styled("div")(() => ({
  padding: "10px 0",
  "& p:first-of-type": {
    fontFamily: "sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.9px",
    color: "#384255",
    marginBottom: "8px",
  },
  "& p:last-of-type": {
    fontFamily: "sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000",
  },
}));

const StyledSalesP = styled("p")(() => ({
  fontFamily: "sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21.9px",
  color: "#1A1A25",
}));
const StyledSalesSpan = styled("span")(() => ({
  fontFamily: "sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#000",
}));

const StyledBtn = styled(Button)(({ variant }) => ({
  fontSize: "18px",
  borderRadius: "6px",
  backgroundColor: variant === "waiting" ? "#BDDEF1" : "#F3DAA5",
  color: "#000",
  textTransform: "none",
  "&:hover": {
    backgroundColor: variant === "waiting" ? "#b3d4ff" : "#ffd275",
  },
  height: "31px",
}));
