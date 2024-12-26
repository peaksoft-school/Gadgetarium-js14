import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { padding, styled } from "@mui/system";
import { SmallPhone } from "../../assets/image";
import OrderSummary from "./OrderSummary";
import MethodDelivery from "./MethodDelivery";
import Payment from "./Payment";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S21 128gb синний",
    model: "9(MLP3RU)",
    article: "393478",
    quantity: 3,
    size: 44,
    color: "Белый",
    image: SmallPhone,
  },
  {
    id: 2,
    name: "Apple iPhone 13 Pro 256gb зелёный",
    model: "13(ABCD)",
    article: "123456",
    quantity: 2,
    size: 46,
    color: "Зелёный",
    image: SmallPhone,
  },
];

const CheckoutTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", background: "#CDCDCD" }}>
      <StyledWrapperBox>
        <FirstBox>
          <span>Главная » Корзина » </span> <span>Оформление заказа</span>
          <StyledH2>Оформление заказа</StyledH2>
        </FirstBox>
        <StyledHr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Box>
            <TabContext
              sx={{
                "& .MuiTabPanel-root ": { padding: "0px !important" },
              }}
              value={value}
            >
              <Box>
                <StyledTabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{ padding: "0px !important" }}
                    label={
                      <StyledLabelBox
                        sx={{
                          color: value === "2" ? " #c812aa" : "",
                          "& div": {
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            "& hr": {
                              backgroundColor:
                                value === value ? "#c812aa" : "grey",
                              height: "2px",
                              width: "160px",
                              border: "none",
                            },
                            "& h1": {
                              backgroundColor:
                                value === value ? "#c812aa" : "grey",
                            },
                          },
                        }}
                        value={value}
                        tabValue="1"
                      >
                        <div>
                          <h1>1</h1>
                          <hr />
                        </div>
                        <p>Варианты доставки</p>
                      </StyledLabelBox>
                    }
                    value="1"
                  />

                  <Tab
                    sx={{ padding: "0px !important" }}
                    label={
                      <StyledLabelBox
                        sx={{
                          color: value === "3" ? " #c812aa" : "",
                          "& div": {
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            "& hr": {
                              backgroundColor: value === "3" ? "#c812aa" : " ",
                              height: "2px",
                              width: "160px",
                              border: "none",
                            },
                            "& h1": {
                              backgroundColor: value === "3" ? "#c812aa" : "",
                            },
                          },
                        }}
                        value={value}
                        tabValue="2"
                      >
                        <div>
                          <h1>2</h1>
                          <hr />
                        </div>
                        <p>Оплата</p>
                      </StyledLabelBox>
                    }
                    value="2"
                  />

                  <Tab
                    label={
                      <StyledLabelBox value={value} tabValue="3">
                        <h1>3</h1>
                        <p>Обзор заказа</p>
                      </StyledLabelBox>
                    }
                    value="3"
                  />
                </StyledTabList>
              </Box>

              <StyledTabPanel value="1">
                <MethodDelivery />
              </StyledTabPanel>
              <StyledTabPanel value="2">
                <Payment />
              </StyledTabPanel>
              <StyledTabPanel value="3">
                <OrderSummary />
              </StyledTabPanel>
            </TabContext>
          </Box>
          {value !== "2" && (
            <Box sx={{ width: "430px" }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "4px",
                  height: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <h4>Сумма заказа</h4>
                  <h5>Изменить</h5>
                </div>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <p>Количество товаров</p>
                    <p>Ваша скидка:</p>
                    <p>Сумма:</p>
                    <h4 style={{ marginTop: "10px" }}>Итого</h4>
                  </div>
                  <div>
                    <p>3 шт.</p>
                    <p style={{ color: "red" }}>-22 000 с</p>
                    <p>228 000 с</p>
                    <h4 style={{ marginTop: "10px" }}>200 000 с</h4>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {products.map((product) => (
                  <Box
                    key={product.id}
                    sx={{
                      display: "flex",
                      gap: "15px",
                      padding: "3px",
                      marginTop: "15px",
                      "& img": {
                        width: "74px",
                        height: "84px",
                      },
                    }}
                  >
                    <img src={product.image} alt={product.name} />
                    <div>
                      <p>
                        {product.name} <br /> {product.model}
                      </p>
                      <StyledDescriptionP>
                        Артикул: {product.article}
                      </StyledDescriptionP>
                      <StyledDescriptionP>
                        Кол-во: {product.quantity} шт
                      </StyledDescriptionP>
                      <StyledDescriptionP>
                        Размер: {product.size}
                      </StyledDescriptionP>
                      <StyledDescriptionP>
                        Цвет: {product.color}
                      </StyledDescriptionP>
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </div>
      </StyledWrapperBox>
    </Box>
  );
};

export default CheckoutTabs;

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));

const StyledLabelBox = styled(Box)(({ theme, value, tabValue }) => ({
  color: value === "3" ? "#c812aa" : " ",
  width: "200px",
  "& h1": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "grey",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& p": {
    fontSize: "14px",
    textTransform: "none",
    display: "flex",
    marginTop: "10px",
  },
  "& div": {
    display: "flex",
    alignItems: "center",
    padding: "0px",
    "& hr": {
      backgroundColor: value === tabValue ? "#c812aa" : "grey",
      height: "2px",
      width: "160px",
      border: "none",
    },
  },
}));

const FirstBox = styled(Box)`
  font-size: 15px;
  font-family: "Arial, Helvetica, sans-serif";
  span {
    display: inline-block;
    padding-bottom: 30px;
  }

  span:first-of-type {
    color: grey;
  }

  span:last-child {
    padding-left: 3px;
  }
`;

const StyledWrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.light,
  width: "100%",
  padding: "40px 80px ",
}));

const StyledHr = styled("hr")({
  width: "100%",
  padding: "0.6px",
  border: "none",
  backgroundColor: "#d1cfcf",
  marginTop: "10px",
});

const StyledTabList = styled(TabList)(({ theme }) => ({
  width: "100%",
  borderBottom: "none",
  "& .MuiTabs-indicator": {
    height: "0px",
    // padding: "1px",
  },
  "& .Mui-selected": {
    padding: "0px",
    h1: {
      background: "#CB11AB",
      padding: "0px",
    },
  },
  "& button": {
    padding: "0px",
  },
}));

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: "30px 14px",
}));

const StyledDescriptionP = styled("p")(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.black.light,
}));
