import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { display, styled } from "@mui/system";

const CheckoutTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <StyledWrapperBox>
        <FirstBox>
          <span>Главная » Корзина » </span>{" "}
          <span>Оформление заказа</span>
          <StyledH2>Оформление заказа</StyledH2>
        </FirstBox>
        <StyledHr />

        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", marginTop: "20px" }}
          >
            <StyledTabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label={
                  <StyledLabelBox>
                    <h1>1</h1>
                    <span>Варианты доставки</span>
                  </StyledLabelBox>
                }
                value="1"
              />
              <Tab
                label={
                  <StyledLabelBox>
                    <h1>2</h1>
                    <span>Оплата</span>
                  </StyledLabelBox>
                }
                value="2"
              />
              <Tab
                label={
                  <StyledLabelBox>
                    <h1>3</h1>
                    <span>Обзор заказа</span>
                  </StyledLabelBox>
                }
                value="3"
              />
            </StyledTabList>
          </Box>
          <TabPanel value="1">1 first</TabPanel>
          <TabPanel value="2">2 seond</TabPanel>
          <TabPanel value="3">3 third</TabPanel>
        </TabContext>
      </StyledWrapperBox>
    </Box>
  );
};

export default CheckoutTabs;

const StyledH2 = styled("h1")(() => ({
  fontFamily: "sans-serif",
}));

const StyledLabelBox = styled(Box)(({ theme }) => ({
  width: "200px",
  display: "flex",
  flexDirection: "column",

  "& h1": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "grey",
    color: "white",
    // marginRight: theme.spacing(9),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& span": {
    fontSize: "14px",
    textTransform: "none",
    display: "flex",
    marginTop: "10px",
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
    background: theme.palette.primary.main,
    height: "0px",
    borderRadius: "70px",
    padding: "1px",
  },
  "& .Mui-selected": {
    h1: {
      background: "#CB11AB",
    },
  },
}));
