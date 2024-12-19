import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { display, height, margin, width } from "@mui/system";

const ratings = [
  { stars: 5, count: 23 },
  { stars: 4, count: 5 },
  { stars: 3, count: 17 },
  { stars: 2, count: 4 },
  { stars: 1, count: 2 },
];

const Ratings = () => {
  return (
    <StyledMainBox>
      <StyledBox>
        <Box className="leftSection">
          <Box sx={{ display: "flex" }}>
            {" "}
            <Typography variant="h4" className="rating">
              4,5
            </Typography>
            <Box className="stars">
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarHalfIcon color="warning" />
            </Box>{" "}
          </Box>

          <Typography className="totalReviews">789 отзывов</Typography>
        </Box>

        <Box className="rightSection">
          {ratings.map((item) => (
            <Box key={item.stars} className="ratingRow">
              <Box className="starsRow">
                {Array.from({ length: item.stars }).map((_, index) => (
                  <StarIcon key={index} color="warning" fontSize="small" />
                ))}
              </Box>
              <Typography className="reviewCount">
                {item.count} отзывов
              </Typography>
            </Box>
          ))}
        </Box>
      </StyledBox>
      <Button variant="contained" className="reviewButton">
        Оставить отзыв
      </Button>
    </StyledMainBox>
  );
};

export default Ratings;
const StyledMainBox = styled(Box)(() => ({
  backgroundColor: "#f4f4f4",
  borderRadius: "12px",
  padding: "24px",
  width: "400px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  alignItems: "center",
  "& button": {
    width: "80%",
    display: "flex",
    margin: "auto",
    height: "45px",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  "& .leftSection": {
    textAlign: "center",
    marginBottom: "12px",
  },

  "& .rating": {
    fontWeight: "bold",
    fontSize: "30px",
    marginRight: "8px",
  },

  "& .stars": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "6px 0",
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },

  "& .totalReviews": {
    fontSize: "14px",
    color: "#888",
  },

  "& .rightSection": {
    width: "100%",
    marginBottom: "16px",
  },

  "& .ratingRow": {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    justifyContent: "space-between",
  },

  "& .starsRow": {
    display: "flex",
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },

  "& .reviewCount": {
    fontSize: "12px",
    color: "#555",
  },

  "& .reviewButton": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
