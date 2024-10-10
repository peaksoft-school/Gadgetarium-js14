import { Box, styled } from "@mui/material"

const Futer = () => {
  return (
    <ConteinerFuter className="futerConteiner">
    </ConteinerFuter>
  )
}

export default Futer

const ConteinerFuter = styled(Box)(({ theme }) => ({
  // Стиль для класса "futerConteiner"
  '&.futerConteiner': {
    win
    backgroundColor: theme.palette.black.dark,
     // Используйте правильное свойство палитры
  }
}))
