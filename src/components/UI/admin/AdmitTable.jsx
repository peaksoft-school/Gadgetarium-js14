// import { Avatar, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// import React, { useState } from 'react'

// const AdmitTable = () => {

//     const reviews = [
//         {id:1,productName:'Asus',modal:'Modal 1212121212',comment : 'Эссуптан,красавчик!',rating:4,user:'adyl Bakytov',userEmail:'Adyl@mail.com',date:'20.06.22-14:15'},
//         {id:1,productName:'Asus',modal:'Modal 1212121212',comment : 'Эссуптан,красавчик!',rating:4,user:'adyl Bakytov',userEmail:'Adyl@mail.com',date:'20.06.22-14:15'},
//     ]

//     const [reply,setReply]=useState('')
//     const [editingRebiewId,setEditingRebiewId]=useState(null)
//   return (
//     <TableContainer component={Paper}>
//         <Table>
//             <TableHead>
//                 <TableRow>
//                     <TableCell>№</TableCell>
//                     <TableCell>Фото</TableCell>
//                     <TableCell>Название товара</TableCell>
//                     <TableCell>Комментарий</TableCell>
//                     <TableCell>Все оценки ()</TableCell>
//                     <TableCell>Пользователь</TableCell>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {reviews.map((item,index)=>(
//                     <TableRow key={item.id}>
//                         <TableCell>{index+1}</TableCell>
//                         <TableCell><Avatar>{item.productName}</Avatar></TableCell>
//                         <TableCell>{item.productName}</TableCell>
//                         <TableCell>{item.comment}</TableCell>
//                         <TableCell><Rating value={item.rating} readOnly/> </TableCell>
//                     </TableRow>
//                     <TableCell>

//                     </TableCell>
//                 ))}
//             </TableBody>


//         </Table>

//     </TableContainer>
//   )
// }

// export default AdmitTable