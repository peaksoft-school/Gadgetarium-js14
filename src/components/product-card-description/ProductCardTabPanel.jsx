import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/system";
import { useState } from "react";
import Description from "./Description";
import { systemUiconsDocumentList } from "../../assets/icon";

const ProductCardTabPanel = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledWrapperBox>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            marginTop: "20px",
          }}
        >
          <StyledTabList
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              label={
                <StyledLabelBox>
                  <span>Описание</span>
                </StyledLabelBox>
              }
              value="1"
            />
            <Tab
              label={
                <StyledLabelBox>
                  <span>Характеристики</span>
                </StyledLabelBox>
              }
              value="2"
            />
            <Tab
              label={
                <StyledLabelBox>
                  <span>Отзывы</span>
                </StyledLabelBox>
              }
              value="3"
            />
            <Tab
              label={
                <StyledLabelBox>
                  <span>Доставка и оплата</span>
                </StyledLabelBox>
              }
              value="4"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: "602px",
              }}
            >
              <img src={systemUiconsDocumentList} alt="Download" />
              <span style={{ marginLeft: "5px" }}> Скачать документ.pdf</span>
            </div>
          </StyledTabList>
        </Box>
        <StyledTabPanel value="1">
          <Description />
        </StyledTabPanel>
        <StyledTabPanel value="2">Содержимое характеристик</StyledTabPanel>
        <StyledTabPanel value="3">Содержимое отзывов</StyledTabPanel>
        <StyledTabPanel value="4">Содержимое доставки и оплаты</StyledTabPanel>
      </TabContext>
    </StyledWrapperBox>
  );
};

export default ProductCardTabPanel;

const StyledWrapperBox = styled(Box)(() => ({
  background: "#fff",
  padding: "0px 80px",
}));

const StyledLabelBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textTransform: "capitalize",
  padding: "0px",
  "& span": {
    fontSize: "16px",
    fontWeight: 400,
    color: theme.palette.text.primary,
    padding: "0px",
  },
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  width: "100%",
  "& .MuiTabs-indicator": {
    background: theme.palette.primary.main,
    height: "0px",
    borderRadius: "70px",
    padding: "1px",
  },
  "& .Mui-selected span": {
    color: theme.palette.primary.main,
  },
}));

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: "40px 0px",
}));
