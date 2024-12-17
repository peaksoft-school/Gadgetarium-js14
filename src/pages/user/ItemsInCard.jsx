import React from 'react'
import Header from '../../components/Header'
import { Box, display, style, styled } from '@mui/system'
import Input from '../../components/UI/Input'
import { garbage, greyHeart } from '../../assets/icon'
import Footer from '../../components/Footer'
import UserItemsInCard from '../../components/UI/UserItemsInCard'
const product = {
    image: 'https://via.placeholder.com/80',
    name: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
    rating: 4.5,
    stock: 42,
    code: '393478',
    quantity: 1,
    price: '104 900',
  };

const ItemsInCard = () => {
  return (
    <div>

        <Header/>
        <Box>
            <Box>
                <p><span>Главная »</span> Корзина</p>
            </Box>
            <Box>
               <p> Товары в корзине</p> 
            </Box>
            <Box sx={{border:'1px solid #cdcdcd'}}/>
            <BoxStyled>
                <Box>
                    <input type="checkbox" />
                    <span>Отметить все</span>
                    

                </Box>
                <Box>
                    <img src={garbage} alt="deleit"
                    
                     />
                     <span>Удалить</span>
                </Box>
                <Box>
                    <img src={greyHeart} alt="" />
                    <span>Переместить в избранное</span>
                </Box>
            </BoxStyled>
            <UserItemsInCard product={product} />



        </Box>
        <Footer />


    </div>
  )
}

export default ItemsInCard

const BoxStyled= styled(Box)(()=>({
    display:'flex'
}))