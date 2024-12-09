import { Box, styled } from '@mui/system'
import React from 'react'
import Button from '../../components/UI/Button'
import AdminReview from '../../components/UI/admin/AdminReview'

const AdminComments = () => {
  return (
    <div>

        <StyledButton>
            <button>Все отзывы</button>
            <button>Неотвеченные +6</button>
            <button>Отвеченные</button>
        </StyledButton>
        <AdminReview />
    </div>
  )
}

export default AdminComments

const StyledButton = styled(Button)(()=>({
    display:'flex',

}))