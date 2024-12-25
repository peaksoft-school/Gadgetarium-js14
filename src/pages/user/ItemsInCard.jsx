import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { CircularProgress } from "@mui/material"; 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { garbage, greyHeart } from "../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasketById,
  getItemsInCard,
  postBasketIzbran,
} from "../../store/intemsInCard/itemsInCardAuth";
import UserItemsInCard from "../../components/UI/UserItemsInCard";
import ModalCard from "./ModalCard";
import CartProjectItem from "./CartProjectItem";

const ItemsInCard = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.basket);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    dispatch(getItemsInCard({ page: 1, pageSize: 10 }));
  }, [dispatch]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };



  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? items.map((item) => item.id) : []);
  };

  const handleMoveToFavorites = () => {
    if (selectedItems.length === 0) return;
    dispatch(postBasketIzbran(selectedItems))
      .unwrap()
      .then(() => {
        setSelectedItems([]);
      });
  };

  const handleDelete = () => {
    selectedItems.forEach((id) => dispatch(deleteBasketById(id)));
    setSelectedItems([]);
  };

  return (
    <div>
      <Header />
      {loading && (
        <LoadingOverlay>
          <CircularProgress color="inherit" />
        </LoadingOverlay>
      )}

      <Box sx={{ padding: "60px" }}>
        <Box>
          <p>
            <StyledSpan>Главная »</StyledSpan> Корзина
          </p>
        </Box>
        <br />
        <Box>
          <StyledTovary>Товары в корзине</StyledTovary>
        </Box>
        <br />
        <hr />

        {items.length === 0 ? (
          <CartProjectItem />
        ) : (
          <>
            <BoxStyled>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
              >
                <StyledInput
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedItems.length === items.length && items.length > 0
                  }
                  
                />
                <span>Отметить все</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={handleDelete}
              >
           <StyledMig src={garbage} alt="delete" className="delete-icon" />

                <span>Удалить</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={handleMoveToFavorites}
              >
                <StyledMig src={greyHeart} alt="favorite" />
                <span>Переместить в избранное</span>
              </Box>
            </BoxStyled>
            <StyledContent>
              <Box>
                {error && <p>Ошибка: {error}</p>}
                {!loading && items.length === 0 && <p>Корзина пуста</p>}
                {!loading &&
                  items.map((product) => (
                    <UserItemsInCard
                      key={product.id}
                      product={product}
                      onCheckboxChange={() => handleCheckboxChange(product.id)}
                      checked={selectedItems.includes(product.id)}
                    />
                  ))}
              </Box>
              <Box>
                <ModalCard />
              </Box>
            </StyledContent>
          </>
        )}
      </Box>

      <Footer />
    </div>
  );
};

export default ItemsInCard;

const LoadingOverlay = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}));

const StyledContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const BoxStyled = styled(Box)(() => ({
  display: "flex",
  padding: "20px",
  gap: "40px",
}));

const StyledSpan = styled("span")(() => ({
  color: "#9ba0a7",
  cursor: "pointer",
}));

const StyledTovary = styled("p")(() => ({
  fontSize: "30px",
  fontWeight: "500",
  fontFamily: "Ubuntu",
}));

const StyledMig = styled('img')`
  transition: filter 0.3s ease; 
  
  &:hover {
    filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(4000%) hue-rotate(0deg) brightness(90%) contrast(90%);
  }
`;

const StyledInput = styled('input')({
  backgroundColor: '#cb11ab',
  color: 'white',
  width: '20px',
  height: '20px',
  accentColor: '#cb11ab', // Modern approach for checkbox color in most browsers
  '&:checked': {
    backgroundColor: '#a50a89', // Color when checked
  },
});




