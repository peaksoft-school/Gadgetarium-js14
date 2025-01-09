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

import { Man } from "../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../store/innerPageCardAmin/innerPageCardThunk";

const CommentList = () => {
  const dispatch = useDispatch();
  const { reviewsData, reviewsLoading, reviewsError } = useSelector(
    (state) => state.innerPageCard
  );

  useEffect(() => {
    dispatch(getAllReviews({ id: 3 }));
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReply = (comment) => {
    setCurrentComment(comment);
    setReplyText(comment.answer || "");
    setOpenModal(true);
  };

  const handleSave = () => {
    const updatedComments = reviewsData.map((comment) =>
      comment.reviewsId === currentComment.reviewsId
        ? { ...comment, answer: replyText }
        : comment
    );


    setOpenModal(false);
    setReplyText("");
  };

  const handleClose = () => {
    setOpenModal(false);
    setReplyText("");
  };

  return (
    <MainBox>
      {reviewsLoading ? (
        <Typography variant="h6" align="center">
          Загружаем комментарии...
        </Typography>
      ) : reviewsError ? (
        <Typography variant="h6" color="error" align="center">
          Ошибка загрузки комментариев
        </Typography>
      ) : reviewsData.length > 0 ? (
        reviewsData.map(
          ({
            reviewsId,
            fullName,
            commentary,
            image,
            createdAt,
            answer,
            grade,
          }) => (
            <Card
              key={reviewsId}
              sx={{
                marginBottom: "20px",
                display: "flex",
              }}
            >
              <StyledTypography component="div">
                <img src={image || Man} alt="person" />
              </StyledTypography>
              <StyledCardContent>
                <span>{fullName}</span>

                <Typography color="textSecondary" sx={{ mb: 1.5 }}>
                  {createdAt || "Дата не указана"}

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

                {answer && (
                  <AdminBox>
                    <span style={{ fontWeight: "bold" }}>
                      Ответ от представителя:
                    </span>
                    <Typography variant="body2">{answer}</Typography>
                  </AdminBox>
                )}
                <StyledButtonBox>
                  <Button
                    variant="text"
                    onClick={() =>
                      handleReply({
                        reviewsId,
                        commentary,
                        answer,
                      })
                    }
                  >
                    {answer ? "Редактировать" : "Ответить"}
                  </Button>
                </StyledButtonBox>
              </StyledCardContent>
            </Card>
          )
        )
      ) : (
        <Typography variant="h6" align="center">
          Здесь нет комментариев
        </Typography>
      )}

      <Modal open={openModal} onClose={handleClose}>
        <StyledModalBox>
          <Typography variant="h6" component="h2" sx={{ marginBottom: 4 }}>
            {currentComment?.answer
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
          <UpdateButtonBox>
            <Button onClick={handleClose} sx={{ marginRight: 1 }}>
              Отменить
            </Button>

            <Button onClick={handleSave} variant="contained" color="primary">
              {currentComment?.answer ? "Сохранить" : "Добавить"}
            </Button>
          </UpdateButtonBox>
        </StyledModalBox>
      </Modal>
    </MainBox>
  );
};

export default CommentList;

// Styled components

const MainBox = styled(Box)(() => ({
  maxWidth: "750px",
  marginLeft: "10px",
  padding: "20px",
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
  marginTop: "15px",
  "& .MuiButton-root": {
    border: "none",
    textTransform: "none",
  },
}));

const UpdateButtonBox = styled(Box)(() => ({
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
