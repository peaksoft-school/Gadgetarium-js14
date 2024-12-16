import React, { useEffect, useReducer, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, styled } from "@mui/system";
import { StateDown, StateUp, SystemX } from "../../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCards,
  getCategories,
  getFilter,
  getLastViews,
} from "../../../store/product-catalog/productCatalogThunk";
import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";

const colors = [
  "Black",
  "Blue",
  "Gold",
  "Graphite",
  "Green",
  "Rose Gold",
  "Red",
  "Silver",
  "White",
  "Purple",
];

const memoryOptions = [
  "8",
  "16",
  "32",
  "64",
  "128",
  "256",
  "512",
  "1024",
  "2048",
  "4096",
];
const ramOptions = ["3", "4", "6", "8", "12"];

const initialState = {
  selectedBrand: null,
  price: [500, 250000],
  selectedColor: [],
  selectedMemory: [],
  selectedRAM: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_BRAND":
      return { ...state, selectedBrand: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "TOGGLE_COLOR":
      return {
        ...state,
        selectedColor: state.selectedColor.includes(action.payload)
          ? state.selectedColor.filter((color) => color !== action.payload)
          : [...state.selectedColor, action.payload],
      };
    case "TOGGLE_MEMORY":
      return {
        ...state,
        selectedMemory: state.selectedMemory.includes(action.payload)
          ? state.selectedMemory.filter((memory) => memory !== action.payload)
          : [...state.selectedMemory, action.payload],
      };
    case "TOGGLE_RAM":
      return {
        ...state,
        selectedRAM: state.selectedRAM.includes(action.payload)
          ? state.selectedRAM.filter((ram) => ram !== action.payload)
          : [...state.selectedRAM, action.payload],
      };
    default:
      return state;
  }
};

const DropDownProduct = () => {
  const dispatch = useDispatch();
  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuEl, setSubMenuEl] = useState(null);

  const { categories, allCards, lastViews } = useSelector(
    (state) => state.productCatalog
  );
  const { brands } = categories;

  const handleRemoveBrand = () => {
    dispatchReducer({ type: "SET_SELECTED_BRAND", payload: null });
  };

  const openMenu = Boolean(anchorEl);
  const openSubMenu = Boolean(subMenuEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuEl(null);
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuEl(null);
  };

  const id = 1;
  useEffect(() => {
    if (id) {
      dispatch(getCategories(id));
    }
  }, [dispatch, id]);

  // const selectedCategoryId = selectedBrand ? selectedBrand.id : null;

  useEffect(() => {
    const params = {
      memory: state.selectedMemory,
      colour: state.selectedColor,
      RAM: state.selectedRAM,
      price: state.price,
    };
    console.log("параметры:", params);

    if (state.selectedBrand) {
      console.log("ID", state.selectedBrand.id);

      dispatch(getFilter({ subCategoryId: state.selectedBrand.id, params }));
    }
  }, [
    state.selectedBrand,
    state.selectedColor,
    state.selectedMemory,
    state.selectedRAM,
    state.price,
    dispatch,
  ]);

  const handleCheckboxChange = (event, type, value) => {
    if (type === "color") {
      dispatchReducer({ type: "TOGGLE_COLOR", payload: value });
    } else if (type === "memory") {
      dispatchReducer({ type: "TOGGLE_MEMORY", payload: value });
    } else if (type === "ram") {
      dispatchReducer({ type: "TOGGLE_RAM", payload: value });
    }
  };

  const handlePriceChange = (event, newValue) => {
    dispatchReducer({ type: "SET_PRICE", payload: newValue });
  };

  useEffect(() => {
    dispatch(getAllCards(1));
  }, []);

  const [showMore, setShowMore] = useState(false);
  const [showmoreColours, setShowmoreColours] = useState(false);

  const displayedOptions = showMore ? memoryOptions : memoryOptions.slice(0, 5);
  const displayColours = showmoreColours ? colors : colors.slice(0, 5);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleShowColours = () => {
    setShowmoreColours(!showmoreColours);
  };

  useEffect(() => {
    dispatch(getLastViews());
  }, []);

  const { elements } = lastViews;
  console.log("999", elements);

  console.log("999", elements);

  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "60px",
            paddingBottom: "10px",
          }}
        >
          <StyledP>
            Найдено{" "}
            {allCards.productsResponses ? allCards.productsResponses.length : 0}{" "}
            товаров
          </StyledP>
          <Grid
            container
            spacing={1}
            sx={{ marginRight: "auto", gap: "10px", paddingLeft: "182px" }}
          >
            <Grid item>
              {state.selectedBrand ? (
                <StyledSelectedBox>
                  {state.selectedBrand.name}{" "}
                  <img
                    src={SystemX}
                    alt="✖"
                    onClick={() => handleRemoveBrand()}
                  />
                </StyledSelectedBox>
              ) : null}
            </Grid>
            <Grid item>
              <StyledSelectedBox>
                Белый <img src={SystemX} alt="✖" />
              </StyledSelectedBox>
            </Grid>
          </Grid>
          <Box>
            <StyledIconButton
              size="small"
              onClick={handleMenuOpen}
              sx={{
                cursor: "pointer",
                display: "inline-block",
                borderRadius: "10px",
              }}
            >
              <p>
                Сортировать <img src={StateDown} alt="✖" />
              </p>
            </StyledIconButton>

            <StyledMenu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <StyledMenuItem onClick={handleMenuClose}>Новинки</StyledMenuItem>
              <StyledMenuItem onClick={handleSubMenuOpen}>
                По акции
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                Рекомендуемые
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                По увеличению цены
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMenuClose}>
                По уменьшению цены
              </StyledMenuItem>
            </StyledMenu>

            <StyledMenu
              anchorEl={subMenuEl}
              open={openSubMenu}
              onClose={handleSubMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: {
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                  padding: "8px 0",
                  marginLeft: "8px",
                },
              }}
            >
              <StyledMenuItem onClick={handleSubMenuClose}>
                Все акции
              </StyledMenuItem>
              <StyledMenuItem
                onClick={handleSubMenuClose}
                sx={{ fontWeight: 500 }}
              >
                До 50%
              </StyledMenuItem>
              <StyledMenuItem onClick={handleSubMenuClose}>
                Свыше 50%
              </StyledMenuItem>
            </StyledMenu>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "35px" }}>
          <Box sx={{ width: "300px" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                padding: "13px",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              <h3
                style={{
                  color: "#3e98e6",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Сбросить все фильтры
              </h3>
            </Box>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#c616a6" }} />}
              >
                <h4>Категория</h4>
              </AccordionSummary>
              <StyledAccordionDetails>
                {brands &&
                  brands.map((brand) => (
                    <FormControlLabel
                      key={brand.id}
                      control={
                        <Checkbox
                          onChange={(event) =>
                            dispatchReducer({
                              type: "SET_SELECTED_BRAND",
                              payload: brand,
                            })
                          }
                          checked={state.selectedBrand?.id === brand.id}
                        />
                      }
                      label={brand.name}
                    />
                  ))}
              </StyledAccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#c616a6" }} />}
              >
                <h4>Стоимость</h4>
              </AccordionSummary>
              <StyledAccordionDetails>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <StyledTextField
                    value={state.price[0]}
                    onChange={(e) =>
                      dispatchReducer({
                        type: "SET_PRICE",
                        payload: [+e.target.value, state.price[1]],
                      })
                    }
                  />
                  <StyledTextField
                    value={state.price[1]}
                    onChange={(e) =>
                      dispatchReducer({
                        type: "SET_PRICE",
                        payload: [state.price[0], +e.target.value],
                      })
                    }
                  />
                </Box>
                <StyledSlider
                  size="small"
                  value={state.price}
                  min={500}
                  max={2500}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </StyledAccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#c616a6" }} />}
              >
                <h4> Цвет</h4>
              </AccordionSummary>
              <StyledAccordionDetails>
                {displayColours.map((colors, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={colors}
                    checked={state.selectedColor.includes(colors)}
                    onChange={(e) => handleCheckboxChange(e, "color", colors)}
                  />
                ))}
                <Box onClick={handleShowColours}>
                  {showmoreColours ? (
                    <StyledMoreDisplay>
                      <img src={StateUp} alt="State Up" />
                      {"   "}
                      Скрыть
                    </StyledMoreDisplay>
                  ) : (
                    <StyledMoreDisplay>
                      <img src={StateDown} alt="State Down" />
                      {"   "}
                      Еще 5
                    </StyledMoreDisplay>
                  )}
                </Box>
                <Box> </Box>
              </StyledAccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#c616a6" }} />}
              >
                <h4>Объем памяти (GB)</h4>
              </AccordionSummary>
              <StyledAccordionDetails>
                {displayedOptions.map((memory, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={memory}
                    onChange={(e) => handleCheckboxChange(e, "memory", memory)}
                  />
                ))}

                <Box onClick={handleShowMore}>
                  {showMore ? (
                    <StyledMoreDisplay>
                      <img src={StateUp} alt="State Up" />
                      {"   "}
                      Скрыть
                    </StyledMoreDisplay>
                  ) : (
                    <StyledMoreDisplay>
                      <img src={StateDown} alt="State Down" />
                      {"   "}
                      Еще 5
                    </StyledMoreDisplay>
                  )}
                </Box>
              </StyledAccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#c616a6" }} />}
              >
                <h4>Объем оперативной памяти (GB)</h4>
              </AccordionSummary>
              <StyledAccordionDetails>
                {ramOptions.map((ram, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={`${ram}`}
                    onChange={(e) => handleCheckboxChange(e, "ram", ram)}
                  />
                ))}
              </StyledAccordionDetails>
            </Accordion>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {allCards.productsResponses && allCards.productsResponses.length > 0
              ? allCards.productsResponses.map((product) => (
                  <Box key={product.sub_product_id} sx={{ width: "258px" }}>
                    <Card
                      img={product.image || "default_image_url"}
                      text={product.fullname}
                      discount={product.discount}
                      title={product.quantity}
                      reiting={product.rating}
                      reviews={product.reviews_count}
                      newPrice={product.new_price}
                      oldPrice={product.price}
                      discountNew={product.isNew}
                      discountClas={product.isLiked}
                      subProductId={product.sub_product_id}
                      type="default"
                    />
                  </Box>
                ))
              : null}
            <StyledButtonBox>
              <Button>Показать ещё</Button>
            </StyledButtonBox>
          </Box>
        </Box>
        {elements && elements.length > 0 ? (
          <>
            <StyledH2>Просмотренные товары</StyledH2>
            <Box sx={{ paddingLeft: "30px", display: "flex", gap: "80px" }}>
              {elements.map((item, index) => (
                <Box key={index} sx={{ width: "180px" }}>
                  <Card
                    img={item.img}
                    text={item.brand}
                    reviews={item.numberOfReviews}
                    newPrice={item.price}
                    reiting={3}
                    type="viewed"
                  />
                </Box>
              ))}
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default DropDownProduct;

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  "& .MuiButtonBase-root": {
    padding: 0,
  },
  "& .MuiTypography-root": {
    padding: 0,
  },
}));

const StyledP = styled("p")(() => ({
  color: "grey",
  fontSize: "14px",
  lineHeight: "18.2px",
}));

const StyledSelectedBox = styled(Box)(() => ({
  minWidth: "90px",
  height: "30px",
  padding: "5px 10px",
  background: "#CDCDCD",
  borderColor: "grey",
  borderRadius: "4px",
  textAlign: "center",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "& img": {
    width: "23px",
    filter:
      "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(0) contrast(100%)",
  },
}));

const StyledMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    elevation: 0,
    marginTop: "1.5rem",
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      marginLeft: "-0.5rem",
      marginRight: "1rem",
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
  },
  padding: "10px ",
}));

const StyledIconButton = styled(IconButton)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:hover .MuiButtonBase-root": {
    backgroundColor: "transparent",
  },

  "& p": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  "& img": {
    width: "18px",
    filter:
      "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(0) contrast(100%)",
    marginLeft: "5px",
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  alignItems: "center",
  "& span": {
    padding: "0px",
  },
  "& .MuiSlider-thumb": {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    width: 20,
    height: 20,
    border: `10px solid ${theme.palette.primary.main}`,
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${theme.palette.primary.main}23`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${theme.palette.primary.main}13`,
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: theme.palette.primary.main,
    height: 1,
  },
  "& .MuiSlider-rail": {
    backgroundColor: "grey",
    height: 1,
  },

  "& .MuiSlider-valueLabel": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "14px",
    fontWeight: "bold",
    padding: "4px",
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: "4px",
  },
}));

const StyledTextField = styled(TextField)(() => ({
  padding: "0",

  input: {
    padding: "5px 10px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    top: "-20px",
  },
}));

const StyledMoreDisplay = styled("p")(() => ({
  color: "#12a4ed",
  fontSize: "16px",
  lineHeight: "18.2px",
  cursor: "pointer",

  "& img": {
    width: "13px",
    filter:
      "invert(31%) sepia(100%) saturate(7498%) hue-rotate(191deg) brightness(98%) contrast(94%)",
  },
}));

const StyledButtonBox = styled(Box)(() => ({
  width: "280px",
  margin: "auto",
  marginTop: "40px",
  marginBottom: "30px",
}));

const StyledH2 = styled("h2")(() => ({
  fontFamily: "sans-serif",
  margin: "80px 0px 40px 0px",
}));
