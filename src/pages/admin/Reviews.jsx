import { styled } from "@mui/system";
import CommentList from "../../components/UI/Comments";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRating } from "../../store/innerPageCardAmin/innerPageCardThunk";
import { Rating, Typography } from "@mui/material";

const Reviews = () => {
  const dispatch = useDispatch();
  const { ratingData } = useSelector((state) => state.innerPageCard);

  useEffect(() => {
    dispatch(
      getRating({
        productId: 1,
      })
    );
  }, [dispatch]);

  return (
    <>
      <h2>Отзывы</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "880px" }}>
          {" "}
          <CommentList />{" "}
        </div>

        <RatingReviewsBorder>
          <LeftColumn>
            <DivCar>
              <h3 variant="body2">{ratingData?.rating}</h3>
              <Rating
                sx={{ fontSize: "20px" }}
                name="half-rating"
                value={ratingData?.rating || 0}
                precision={0.5}
              />
            </DivCar>
            <Typography name="body2" value={ratingData?.rating || 2}>
              отзывов
            </Typography>
          </LeftColumn>
          <RightColumn>
            <RatingWithText>
              <Rating
                sx={{ fontSize: "20px" }}
                name="Rating"
                value={ratingData?.five || 0}
                precision={1}
              />
              <Typography variant="body2">
                {ratingData?.five || 0} отзывов
              </Typography>
            </RatingWithText>
            <RatingWithText>
              <Rating
                sx={{ fontSize: "20px" }}
                name="Rationg"
                value={ratingData?.four || 0}
                precision={1}
              />
              <Typography variant="body2">
                {ratingData?.four || 0} отзывов
              </Typography>
            </RatingWithText>
            <RatingWithText>
              <Rating
                sx={{ fontSize: "20px" }}
                name="half-rating"
                value={ratingData?.three || 0}
                precision={1}
              />
              <Typography variant="body2">
                {ratingData?.three || 0} отзывов
              </Typography>
            </RatingWithText>
            <RatingWithText>
              <Rating
                sx={{ fontSize: "20px" }}
                name="half-rating"
                value={ratingData?.two || 0}
                precision={1}
              />
              <Typography variant="body2">
                {ratingData?.two || 0} отзывов
              </Typography>
            </RatingWithText>
            <RatingWithText>
              <Rating
                sx={{ fontSize: "20px" }}
                name="half-rating"
                value={ratingData?.one || 0}
                precision={1}
              />
              <Typography variant="body2">
                {ratingData?.one || 0} отзывов
              </Typography>
            </RatingWithText>
          </RightColumn>
        </RatingReviewsBorder>
      </div>
    </>
  );
};
export default Reviews;

const RatingReviewsBorder = styled("div")({
  backgroundColor: "#f4f4f4",
  width: "500px",
  height: "160px",
  borderRadius: "5px",
  display: "flex",
  padding: "16px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

const RatingColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
});

const RatingWithText = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const LeftColumn = styled(RatingColumn)({
  display: "flex",
});

const RightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const DivCar = styled("div")({
  display: "flex",
  flexDirection: "row",
});
