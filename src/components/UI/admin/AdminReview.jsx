import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, TextField, IconButton, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';



const AdminReview = ({reviews}) => {
  const [reply, setReply] = useState('');
  const [editingReviewId, setEditingReviewId] = useState(null);

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleReply = (id) => {
    console.log(`Reply to review ${id}:`, reply);
    setReply('');
    setEditingReviewId(null);
  };

  const handleDelete = (id) => {
    console.log(`Delete review with id ${id}`);
    // Логика для удаления отзыва
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Фото</TableCell>
            <TableCell>Название товара</TableCell>
            <TableCell>Комментарий</TableCell>
            <TableCell>Оценка</TableCell>
            <TableCell>Пользователь</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((review, index) => (
            <TableRow key={review.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell><Avatar>{review.productName[0]}</Avatar></TableCell>
              <TableCell>{review.productName}<br />Модель: {review.model}</TableCell>
              <TableCell>{review.comment}<br /><small>{review.date}</small></TableCell>
              <TableCell><Rating value={review.rating} readOnly /></TableCell>
                <TableCell>
                    <StyeldBoxImg>

                    <StyledImge src={review.phote} alt="" />
                    <Box >

                    {review.user}
                    <br />
                    <div>

                    <small>{review.userEmail}</small> 
                    </div>
                    </Box>
                    </StyeldBoxImg>
                    </TableCell>

              
              {editingReviewId === review.id ? (
                <TableCell colSpan={6}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    value={reply}
                    onChange={handleReplyChange}
                    placeholder="Ответить на комментарий"
                    sx={{ marginBottom: 1 }}
                  />
                  <Button variant="contained" color="primary" onClick={() => handleReply(review.id)} sx={{ marginRight: 1 }}>
                    Сохранить
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => setEditingReviewId(null)}>
                    Отменить
                  </Button>
                </TableCell>
              ) : (
                <TableCell>
                  <Button variant="text" color="primary" onClick={() => setEditingReviewId(review.id)}>Ответить</Button>
                  <IconButton onClick={() => handleDelete(review.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminReview;

const StyledImge = styled('img')(()=>({
    borderRadius:'50%',
    width:'50px',
    height:'50px',
    objectFit:'cover',
    marginLeft:'10px',
    verticalAlign:'middle',
}))

const StyeldBoxImg= styled(Box)(()=>({
    display:'flex',
    gap:'20px'


}))
