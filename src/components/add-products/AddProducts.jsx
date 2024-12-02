import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { styled } from "@mui/system";
import Tables from "./price-quality/Tables";
import DescriptionQuill from "./description/DescriptionQuill";
import AdminHeader from "../UI/AdminHeader";
import MainForm from "./products/MainForm";

const AddProducts = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <AdminHeader />
      <StyledWrapperBox>
        <FirstBox>
          <span>Товары »</span>
          <span>Добавление товара</span>
        </FirstBox>
        {value === "1" && <h2>Добавление товара</h2>}
        {value === "2" && <h2>Установка цены и количество товара</h2>}
        {value === "3" && <h2>Описание и обзор</h2>}
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
                    <span>Добавление товара</span>
                  </StyledLabelBox>
                }
                value="1"
              />
              <Tab
                label={
                  <StyledLabelBox>
                    <h1>2</h1>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        fontFamily: "",
                      }}
                    >
                      Установка цены и количество товара
                    </p>
                  </StyledLabelBox>
                }
                value="2"
              />
              <Tab
                label={
                  <StyledLabelBox>
                    <h1>3</h1>
                    <span style={{ fontSize: "16px" }}>Описание и обзор</span>
                  </StyledLabelBox>
                }
                value="3"
              />
            </StyledTabList>
          </Box>
          <TabPanel value="1">
            <MainForm setNewValue={setValue} />
          </TabPanel>
          <TabPanel value="2">
            <Tables  setNewValue={setValue} />
          </TabPanel>
          <TabPanel value="3">
            <DescriptionQuill />
          </TabPanel>
        </TabContext>
      </StyledWrapperBox>
    </Box>
  );
};

export default AddProducts;

const StyledLabelBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& h1": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    marginRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

const StyledWrapperBox = styled(Box)(() => ({
  backgroundColor: "#ffffff",
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
    background: "inherit",
  },
  "& .Mui-selected": {
    h1: {
      background: "#CB11AB",
    },
  },
}));
