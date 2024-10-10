import { Box, styled } from "@mui/material"

const Futer = () => {
  return (
    <ConteinerFuter className="futerConteiner">
        <Box className='box-text'>
            <p>Каталог</p>
            <p>Смартфоны</p>
            <p>Ноутбуки и планшеты</p>
            <p>Смарт-часы и браслеты</p>
            <p>Аксессуары </p>
        </Box>
        <Box className='box-text'>
            <p>Будь с нами</p>
            <p>Акции</p>
            <p>Новинки</p>
            <p>Популярные категории </p>
        </Box>
        <Box className='box-text'>
            <p>Помощь и сервисы</p>
            <p>О магазине</p>
            <p>Доставка</p>
            <p>FAQ</p>
            <p>Контакты</p>
        </Box>
        <Box className='box-text'>
            <p>Расскажем об акциях и скидках</p>
        </Box>
    </ConteinerFuter>
  )
}

export default Futer

const ConteinerFuter = styled(Box)(({ theme }) => ({
  // Стиль для класса "futerConteiner"
  '&.futerConteiner': {
    width:'100%',
    display:'flex',
    justifyContent:'space-around',

    backgroundColor: theme.palette.black.dark,
  },
  '&  .box-text' :{
    display: 'flex',
    flexDirection: "column",
    
    
    
    
    padding: '20px',
    '& p':{
      color: theme.palette.lightGrey.light,
      margin: '10px',
      fontSize: '16px',

    }
  }
}))
