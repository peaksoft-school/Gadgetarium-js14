import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Modal,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import Button from "../UI/Button";
import Rating from "@mui/material/Rating";

import { editLine, garbage, Man } from "../../assets/icon";
import Ratings from "./Raiting";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../store/cardof-product-description/cardofProductDescriptionThunk";

const initialState = [
  {
    id: 1,
    img: Man,
    rating: 0,
    author: "Адиль Бакытов",
    date: "20.06.22- 14:45",
    text: "-Размер (разумный - достаточно большой для чтения/просмотра контента, но не чрезмерный  -Камера первое время режима мультикадр был приятно удивлён мегапикселей не пожалели на основную камеру,зум работает увереннее чем у конкурентов    -Экран приятно цветопередача, читать комфортно, повышенная герцовка в первые разы восхищала)",
    adminReplied: "Благодарим Вас за отзыв, рады быть полезными...",
  },
  {
    id: 2,
    img: Man,
    rating: 0,
    author: "Jhon A",
    date: "20.06.22- 7:32",
    text: "-Размер (разумный - достаточно большой для чтения/просмотра контента, но не чрезмерный  -Камера первое время режима мультикадр был приятно удивлён мегапикселей не пожалели на основную камеру,зум работает увереннее чем у конкурентов    -Экран приятно цветопередача, читать комфортно, повышенная герцовка в первые разы восхищала)",
    adminReplied: null,
  },
  {
    id: 3,
    img: Man,
    rating: 0,
    author: "Maria Victarevna",
    date: "20.06.22- 20:35",
    text: "-Размер (разумный - достаточно большой для чтения/просмотра контента, но не чрезмерный  -Камера первое время режима мультикадр был приятно удивлён мегапикселей не пожалели на основную камеру,зум работает увереннее чем у конкурентов    -Экран приятно цветопередача, читать комфортно, повышенная герцовка в первые разы восхищала)",
    adminReplied: null,
  },
];

const Reviews = () => {
  const [comments, setComments] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);
  const [replyText, setReplyText] = useState("");
  const { reviewsData } = useSelector((state) => state.cardofProduct);
  console.log("reviews", reviewsData);

  const dispatch = useDispatch();

  const handleReply = (comment) => {
    setCurrentComment(comment);
    setReplyText(comment.adminReplied || "");
    setOpenModal(true);
  };

  const handleRatingChange = (id, newValue) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, rating: newValue } : comment
    );
    setComments(updatedComments);
  };

  const handleSave = () => {
    const updatedComments = comments.map((comment) =>
      comment.id === currentComment.id
        ? { ...comment, adminReplied: replyText }
        : comment
    );
    setComments(updatedComments);
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
    setReplyText("");
  };

  useEffect(() => {
    const productId = 1;
    dispatch(getAllReviews({ id: productId }));
  }, []);

  return (
    <MainBox>
      <StyledReviewsBox>
        <h2>Отзывы</h2>

        {reviewsData && reviewsData.length > 0 ? (
          reviewsData.map(
            ({ reviewsId, fullName, commentary, image, createdAt, grade }) => (
              <Card
                key={reviewsId}
                sx={{ marginBottom: "20px", display: "flex" }}
              >
                <StyledTypography component="div">
                  <img src={image || Man} alt="person" />
                </StyledTypography>
                <StyledCardContent>
                  <span>{fullName}</span>
                  <Typography color="textSecondary" sx={{ mb: 1.5 }}>
                    {createdAt
                      ? new Date(createdAt).toLocaleString()
                      : "Дата не указана"}

                    <RatingBox>
                      <span>Оценка</span>
                      <Rating
                        name={`rating-${reviewsId}`}
                        value={grade || 0}
                        size="small"
                        readOnly
                        sx={{
                          "& .MuiRating-icon": {
                            color: "gold",
                          },
                          "& .MuiRating-iconEmpty": {
                            color: "gold",
                          },
                        }}
                      />
                    </RatingBox>
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "15px" }}>
                    {commentary}
                  </Typography>

                  <StyledButtonBox>
                    <img src={editLine} alt="edit" />
                    <img src={garbage} alt="delete" />
                  </StyledButtonBox>
                </StyledCardContent>
              </Card>
            )
          )
        ) : (
          <Typography variant="h6" align="center">
            Здесь нет отзывов
          </Typography>
        )}

        <Modal open={openModal} onClose={handleClose}>
          <StyledModalBox>
            <Typography variant="h6" component="h2" sx={{ marginBottom: 4 }}>
              {currentComment?.adminReplied
                ? "Редактировать комментарий"
                : "Ответ на комментарий"}
            </Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Введите ваш ответ"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <UpdateBottunBox>
              <Button onClick={handleClose} sx={{ marginRight: 1 }}>
                Отменить
              </Button>

              <Button onClick={handleSave} variant="contained" color="primary">
                {currentComment?.adminReplied ? "Сохранить" : "Добавить"}
              </Button>
            </UpdateBottunBox>
          </StyledModalBox>
        </Modal>
        {reviewsData & (reviewsData.length > 0) ? (
          <StyledButton>
            <Button>Показать ещё</Button>
          </StyledButton>
        ) : null}
      </StyledReviewsBox>
      <Box>
        <Ratings />
      </Box>
    </MainBox>
  );
};

export default Reviews;

const MainBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
const StyledReviewsBox = styled(Box)(() => ({
  maxWidth: "850px",
  "& h2": {
    marginBottom: "40px",
  },
}));

const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 520,
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  borderRadius: "4px",
}));

const AdminBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.main,
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "15px",
}));
const StyledButtonBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "150px",
  marginLeft: "620px",
  gap: "10px",
}));

const UpdateBottunBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "15px",
  "& .MuiButton-root": {
    height: "40px",
    textTransform: "none",
  },
}));

const StyledTypography = styled(Typography)(() => ({
  paddingLeft: "10px",
  "& img": {
    width: "37px",
    height: "37px",
    marginTop: "12px",
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  "& span": {
    fontWeight: "bolder",
    fontSize: "18px",
  },
}));

const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "10px 0px 10px 0px",
  gap: "8px",
  "& span": {
    fontWeight: "bold",
    color: "black",
    fontSize: "18px",
  },
}));

const StyledButton = styled(Box)(() => ({
  width: "250px",
  margin: "auto",
  marginTop: "40px",
  marginBottom: "30px",
}));
