import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";
import Description from "./Description";
import { systemUiconsDocumentList } from "../../assets/icon";
import Characteristics from "./Characteristics";
import DeliveryAndPayment from "./DeliveryAndPayment";
import Reviews from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { getPDF } from "../../store/cardof-product-description/cardofProductDescriptionThunk";

const ProductCardTabPanel = () => {
  const { pdfFile } = useSelector((state) => state.cardofProduct);
  const dispatch = useDispatch();

  const [value, setValue] = useState("1");
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const id = 1;
    dispatch(getPDF({ id }))
      .unwrap()
      .then(() => setError(null))
      .catch(() => setError("PDF файл не найден!"));
  }, [dispatch]);

  const handleDownload = () => {
    if (pdfFile) {
      window.open(pdfFile, "_blank");
    } else {
      setError("PDF файл не найден!");
    }
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
              <img
                onClick={handleDownload}
                src={systemUiconsDocumentList}
                alt="Download"
              />
              <span style={{ marginLeft: "5px" }}>
                {error && <p style={{ color: "red" }}>{error}</p>} Скачать
                документ.pdf
              </span>
            </div>
          </StyledTabList>
        </Box>
        <StyledTabPanel value="1">
          <Description />
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <Characteristics />
        </StyledTabPanel>
        <StyledTabPanel value="3">
          <Reviews />
        </StyledTabPanel>
        <StyledTabPanel value="4">
          <DeliveryAndPayment />
        </StyledTabPanel>
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
