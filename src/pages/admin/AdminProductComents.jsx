import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminReview from "../../components/UI/admin/AdminReview";
import { getAllComments } from "../../store/slice/adminComents/adminCommentsAuth";

const AdminProductComents = () => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.adminComments);

  useEffect(() => {
    dispatch(getAllComments("AllReviews"));
  }, [dispatch]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!comments.reviewResponses || comments.reviewResponses.length === 0) {
    return <p>Нет отзывов для отображения</p>;
  }

  return (
    <div>
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => dispatch(getAllComments("AllReviews"))}>
          Все отзывы
        </button>
        <button onClick={() => dispatch(getAllComments("Unanswered"))}>
          Неотвеченные
        </button>
        <button onClick={() => dispatch(getAllComments("Answered"))}>
          Отвеченные
        </button>
      </Box>

      <AdminReview reviews={comments.reviewResponses || []} />
    </div>
  );
};

export default AdminProductComents;
