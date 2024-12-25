import styled from "@emotion/styled";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { IconC } from "../../assets/icon";
import { TabContext, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { getInfographic } from "../../store/productAdmin/infografictAthThunk";
import { useDispatch, useSelector } from "react-redux";

const Infografics = () => {
  const [value, setValue] = useState("day");

  const { loading, infografics, error } = useSelector(
    (state) => state.infographics
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfographic(value));
  }, [dispatch, value]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledWrapperBox>
      <p style={{ fontFamily: "revert", fontSize: "14px" }}>ИФОГРАФИКА</p>

      <StyledFirstBox>
        <StyledDetailBox>
          <Typography>
            {infografics.redeemedForTheAmount} <img src={IconC} alt="cIcon" />
          </Typography>
          <span>Выкупили на сумму</span>
          <Typography>{infografics.countRedeemed}</Typography>
        </StyledDetailBox>
        <hr />

        <StyledDetailBoxSecond>
          <Typography>
            {infografics.orderedForTheAmount} <img src={IconC} alt="cIcon" />
          </Typography>
          <span>Заказали на сумму</span>
          <Typography>{infografics.countOrdered}</Typography>
        </StyledDetailBoxSecond>
      </StyledFirstBox>

      <TabContext value={value}>
        <Box>
          <StyledTabs value={value} onChange={handleChange}>
            <Tab label="ЗА ДЕНЬ" value="day" />
            <Tab label="ЗА МЕСЯЦ" value="month" />
            <Tab label="ЗА ГОД" value="year" />
          </StyledTabs>
          <StyledTabPanelsBox>
            <TabPanel value="day" index="day">
              Доставлено товаров на сумму
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {infografics.currentPeriod}
                    <StyledImage
                      src={IconC}
                      alt=""
                      style={{
                        marginLeft: "2px",
                        width: "13px",
                        height: "13px",
                      }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Текущий период
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {infografics.previousPeriod}
                    <StyledImage src={IconC} alt="" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Предыдущий период
                  </p>
                </StyledItemBoxPrevious>
              </Box>
            </TabPanel>

            <TabPanel value="month" index="month">
              Доставлено товаров на сумму
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {infografics.currentPeriod}
                    <StyledImage
                      src={IconC}
                      alt=""
                      style={{
                        marginLeft: "2px",
                        width: "13px",
                        height: "13px",
                      }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Текущий период
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {infografics.previousPeriod}
                    <StyledImage src={IconC} alt="c" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Предыдущий период
                  </p>
                </StyledItemBoxPrevious>
              </Box>
            </TabPanel>

            <TabPanel value="year" index="year">
              Доставлено товаров на сумму
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledItemBox>
                  <h3>
                    {infografics.currentPeriod}
                    <StyledImage
                      src={IconC}
                      alt="c"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </h3>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Текущий период
                  </p>
                </StyledItemBox>
                <StyledItemBoxPrevious>
                  <h4>
                    {infografics.previousPeriod}
                    <StyledImage src={IconC} alt="c" />
                  </h4>
                  <p style={{ color: "#7f8795", marginTop: "3px" }}>
                    Предыдущий период
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
