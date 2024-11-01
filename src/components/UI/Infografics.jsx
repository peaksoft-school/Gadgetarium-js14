import styled from "@emotion/styled";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { IconC } from "../../assets/icon";
import { TabContext, TabPanel } from "@mui/lab";
import React,{ useState } from "react";


const data = [
  {
    id: "1",
    sum: `5 647`,
    img: IconC,
    description: `Выкупили на сумму`,
    count: `12 шт`,
    color: "#0066FF",
  },
  {
    id: "2",
    sum: `56 265`,
    img: IconC,
    description: `Заказали на сумму`,
    count: `56 шт`,
    color: `#FF9900`,
  },
];

const currentData = {
  description: "Доставлено товаров на сумму ",
  currentPeriod: "Текущий период",
  previousPeriod: "Предыдущий период",
  image: IconC,
  day: {
    current: "120 000",
    previous: "100 500",
  },
  month: {
    current: "300 000",
    previous: "250 000",
  },
  year: {
    current: "3 000 00",
    previous: "2 500 000",
  },
};

const Infografics = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledWrapperBox>
      <p style={{ fontFamily: "revert", fontSize: "14px" }}>ИФОГРАФИКА</p>

      <StyledFirstBox>
        {data.length ? (
          <>
            {data
              .filter((item) => item.id === "1")
              .map(({ id, sum, img, description, count }) => (
                <StyledDetailBox key={id}>
                  <Typography>
                    {sum} <img src={img} alt="cIcon" />
                  </Typography>
                  <span>{description}</span>
                  <Typography>{count}</Typography>
                </StyledDetailBox>
              ))}
            <hr />
            {data
              .filter((item) => item.id === "2")
              .map(({ id, sum, img, description, count }) => (
                <StyledDetailBoxSecond key={id}>
                  <Typography>
                    {sum} <img src={img} alt="cIcon" />
                  </Typography>
                  <span>{description}</span>
                  <Typography>{count}</Typography>
                </StyledDetailBoxSecond>
              ))}
          </>
        ) : (
          <Typography> Нет данных</Typography>
        )}
      </StyledFirstBox>

      <TabContext value={value}>
        <Box>
          <StyledTabs value={value} onChange={handleChange}>
            <Tab label="ЗА ДЕНЬ" value="1" />
            <Tab label="ЗА МЕСЯЦ" value="2" />
            <Tab label="ЗА ГОД" value="3" />
          </StyledTabs>
          <StyledTabPanelsBox>
            <TabPanel value="1" index="1">
              {currentData.description}
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {currentData.day.current}
                    <StyledImage
                      src={currentData.image}
                      alt=""
                      style={{
                        marginLeft: "2px",
                        width: "13px",
                        height: "13px",
                      }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.currentPeriod}
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {currentData.day.previous}
                    <StyledImage src={currentData.image} alt="" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.previousPeriod}
                  </p>
                </StyledItemBoxPrevious>
              </Box>
            </TabPanel>
            <TabPanel value="2" index="2">
              {currentData.description}
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {currentData.month.current}
                    <StyledImage
                      src={currentData.image}
                      alt=""
                      style={{
                        marginLeft: "2px",
                        width: "13px",
                        height: "13px",
                      }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.currentPeriod}
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {currentData.month.previous}
                    <StyledImage src={currentData.image} alt="c" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.previousPeriod}
                  </p>
                </StyledItemBoxPrevious>
              </Box>
            </TabPanel>
            <TabPanel value="3" index="3">
              {currentData.description}
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {currentData.year.current}
                    <StyledImage
                      src={currentData.image}
                      alt="c"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.currentPeriod}
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {currentData.year.previous}
                    <StyledImage src={currentData.image} alt="c" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    {currentData.previousPeriod}
                  </p>
                </StyledItemBoxPrevious>
              </Box>
            </TabPanel>
          </StyledTabPanelsBox>
        </Box>
      </TabContext>
    </StyledWrapperBox>
  );
};

export default Infografics;

const StyledWrapperBox = styled(Box)(() => ({
  width: "330px",
  height: "323px",
  marginLeft: "20px",
}));

const StyledFirstBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 0px",
}));

const StyledDetailBox = styled(Box)(({ theme }) => ({
  "& span": {
    color: theme.palette.darkGrey.main,
    letterSpacing: "0.5px",
    fontSize: "15px",
  },
  "& .MuiTypography-root:first-of-type": {
    color: theme.palette.info.main,
    fontSize: "24px",
    display: "flex",
    gap: "5px",
    "& img": {
      marginTop: "6px",
    },
  },
  "& .MuiTypography-root:last-of-type": {
    color: theme.palette.info.main,
    fontSize: "20px",
    paddingTop: "8px",
  },
}));

const StyledDetailBoxSecond = styled(Box)(({ theme }) => ({
  "& span": {
    color: theme.palette.darkGrey.main,
    letterSpacing: "0.5px",
    fontSize: "15px",
  },
  "& .MuiTypography-root:first-of-type": {
    color: theme.palette.warning.main,
    fontSize: "24px",
    display: "flex",
    gap: "5px",
    "& img": {
      marginTop: "6px",
    },
  },
  "& .MuiTypography-root:last-of-type": {
    color: theme.palette.warning.main,
    fontSize: "20px",
    paddingTop: "8px",
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  borderBottom: "1px solid black",
  "& .MuiTab-root": {
    borderBottom: "1px solid transparent",
    marginRight: "25px",

    "&.Mui-selected": {
      borderBottom: "1px solid black",
      color: "black",
    },
  },
  "& .MuiButtonBase-root": {
    border: "none",
    outline: "none",
    boxShadow: "none",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const StyledTabPanelsBox = styled(Box)(() => ({
  backgroundColor: "#eaf0fc",
  marginTop: "8px",
  borderRadius: "8px",
  height: "117px",
  width: "100%",
  "& .MuiTabPanel-root": {
    paddingTop: "10px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#424a59",
  },
}));

const StyledItemBoxPrevious = styled(Box)(() => ({
  "& h4": {
    color: "#30c600",
    fontSize: "16px",
  },

  "& p": {
    letterSpacing: "0",
    fontSize: "13px",
    fontWeight: 350,
  },
  marginTop: "27px",
}));

const StyledImage = styled("img")(() => ({
  marginLeft: "2px",
  width: "9px",
  height: "9px",
  filter:
    "invert(50%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(0.9)",
}));

const StyledItemBox = styled(Box)(() => ({
  "& h3": {
    color: "#30c600",
    fontSize: "20px",
    paddingBottom: "3px",
  },

  "& p": {
    letterSpacing: "0",
    fontSize: "16px",
    fontWeight: 350,
  },
  marginTop: "17px",
}));
