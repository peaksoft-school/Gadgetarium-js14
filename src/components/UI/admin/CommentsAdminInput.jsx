import React, { useState } from "react";
import { Input, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { createCommentPost, updateCommentResponse } from "../../../store/slice/adminComents/adminCommentsAuth";

const CommentBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const CommentsAdminInput = ({ review, onClose }) => {
  const [editingComment, setEditingComment] = useState(review.answer || "");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (review.answer) {
      dispatch(
        updateCommentResponse({
          reviewId: review.id,
          answer: editingComment || null,
        })
      );
    } else {
      dispatch(
        createCommentPost({
          reviewId: review.id,
          answer: editingComment || null,
        })
      );
    }
    setEditingComment(""); 
    if (onClose) onClose(); 
  };

  return (
    <CommentBox>
      <Typography variant="h6">
        {review.answer ? "Редактировать комментарий" : "Ответить на комментарий"}
      </Typography>
      <Input
        placeholder="Введите ваш ответ..."
        multiline
        rows={4}
        value={editingComment}
        onChange={(e) => setEditingComment(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "10px" }}
        onClick={handleSubmit}
      >
        {review.answer ? "Редактировать" : "Ответить"}
      </Button>
    </CommentBox>
  );
};

export default CommentsAdminInput;
