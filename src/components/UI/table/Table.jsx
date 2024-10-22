// import React, { useMemo, useState } from "react";
// import {
//   Avatar,
//   Checkbox,
//   Paper,
//   Table,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableBody,
//   Box,
// } from "@mui/material";
// import { useTable, usePagination } from "react-table";
// import styled from "@emotion/styled";
import { TableItem } from "./TableItem";

// const MyTable = () => {
//   const [selectedIds, setSelectedIds] = useState([]); // Храним массив выбранных id

//   const data = useMemo(
//     () => [
//       {
//         id: 1,
//         photo:
//           "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
//         article: "154665884",
//         quantityText: "Количество товара 105шт",
//         name: "Samsung Galaxy S21...",
//         date: "05.05.2022",
//         time: "14:10",
//         quantity: 1,
//         price: "50 000с",
//         currentPrice: "45 000с",
//         discount: "15%",
//       },
//       {
//         id: 4,
//         photo:
//           "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
//         article: "154665884",
//         quantityText: "Количество товара 105шт",
//         name: "Samsung Galaxy S21...",
//         date: "05.05.2022",
//         time: "14:10",
//         quantity: 1,
//         price: "50 000с",
//         currentPrice: "45 000с",
//         discount: "15%",
//       },
//       // Можно добавить больше данных
//     ],
//     []
//   );

//   // Функция для обработки клика по чекбоксу
//   const handleCheckboxClick = (id) => {
//     console.log(id);
//     setSelectedIds(
//       (prevSelectedIds) =>
//         prevSelectedIds.includes(id)
//           ? prevSelectedIds.filter((selectedId) => selectedId !== id) // Удаляем id, если он уже выбран
//           : [...prevSelectedIds, id] // Добавляем id, если он не выбран
//     );
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "id",
//         Cell: ({ row }) => {
//           return row.isShow ? (
//             <Checkbox
//               checked={selectedIds.includes(row.original.id)} // Проверяем, выбран ли id
//               onChange={() => handleCheckboxClick(row.original.id)}
//             />
//           ) : null;
//         },
//       },
//       {
//         Header: "Фото",
//         accessor: "photo",
//         Cell: ({ cell: { value } }) => <Avatar src={value} alt="Product" />,
//       },
//       {
//         Header: "Артикул",
//         accessor: "article",
//       },
//       {
//         Header: "Наименование товара",
//         accessor: "name",
//         Cell: ({ row, someFn }) => (
//           <div onClick={someFn}>
//             <div>{row.original.quantityText}</div>
//             <div style={{ fontSize: "0.8em", color: "#666" }}>
//               {row.original.name}
//             </div>
//           </div>
//         ),
//       },
//       {
//         Header: "Дата создания",
//         accessor: "date",
//         Cell: ({ row }) => (
//           <div>
//             <div>{row.original.date}</div>
//             <div style={{ fontSize: "0.8em", color: "#666" }}>
//               {row.original.time}
//             </div>
//           </div>
//         ),
//       },
//       {
//         Header: "Кол-во",
//         accessor: "quantity",
//       },
//       {
//         Header: "Цена товара",
//         accessor: "price",
//         Cell: ({ row }) => (
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div>{row.original.price}</div>
//             <div style={{ color: "red", marginLeft: "5px" }}>
//               {row.original.discount}
//             </div>
//           </div>
//         ),
//       },
//       {
//         Header: "Текущая цена",
//         accessor: "currentPrice",
//         Cell: ({ value }) => <span style={{ color: "blue" }}>{value}</span>,
//       },
//     ],
//     [selectedIds] // Зависимость от selectedIds
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state: { pageIndex, pageSize },
//     gotoPage,
//     setPageSize,
//   } = useTable(
//     { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
//     usePagination
//   );

//   return (
//     <Paper>
//       <Box>
//         <TableContainer>
//           <Table {...getTableProps()} style={{ minWidth: 650 }}>
//             <StyledHeader>
//               {headerGroups.map((headerGroup) => (
//                 <TableRow {...headerGroup.getHeaderGroupProps()}>
//                   {headerGroup.headers.map((column) => (
//                     <StyledTableCell {...column.getHeaderProps()}>
//                       {column.render("Header")}
//                     </StyledTableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </StyledHeader>
//             <TableBody {...getTableBodyProps()}>
//               {page.map((row) => {
//                 prepareRow(row);
//                 return <TableItem row={row} />;
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           component="div"
//           count={data.length}
//           page={pageIndex}
//           onPageChange={(_, newPage) => gotoPage(newPage)}
//           rowsPerPage={pageSize}
//           onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
//           rowsPerPageOptions={[5, 10]}
//         />
//       </Box>
//     </Paper>
//   );
// };

// export default MyTable;

// const StyledHeader = styled(TableHead)(() => ({
//   backgroundColor: "#4c5566",
// }));

// const StyledTableCell = styled(TableCell)(() => ({
//   color: "#fff", // Белый цвет текста для заголовков
// }));

import { useMemo, useState } from "react";
import {
  Avatar,
  Checkbox,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";
import { useTable, usePagination } from "react-table";
import styled from "@emotion/styled";

const MyTable = () => {
  const [selectedId, setSelectedId] = useState([]); 

  const [cellId, setCellId] = useState([]); //

  const data = useMemo(
    () => [
      {
        id: 1,
        photo:
          "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
        article: "154665884",
        quantityText: "Количество товара 105шт",
        name: "Samsung Galaxy S21...",
        date: "05.05.2022",
        time: "14:10",
        quantity: 1,
        price: "50 000с",
        currentPrice: "45 000с",
        discount: "15%",
      },
      {
        id: 4,
        photo:
          "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
        article: "154665884",
        quantityText: "Количество товара 105шт",
        name: "Samsung Galaxy S21...",
        date: "05.05.2022",
        time: "14:10",
        quantity: 1,
        price: "50 000с",
        currentPrice: "45 000с",
        discount: "15%",
      },
      // Можно добавить больше данных
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Cell: ({ row }) =>
          selectedId.includes(row.id) ? (
            <Checkbox
              defaultChecked={cellId.includes(row.original.id)}
              onChange={(e) => {
                e.stopPropagation();
                if (cellId.includes(row.original.id)) {
                  setCellId(null);
                } else {
                  setCellId((prevState) => [...prevState, row.original.id]);
                }
              }}
            />
          ) : (
            false
          ),
      },
      {
        Header: "Фото",
        accessor: "photo",
        Cell: ({ cell: { value } }) => <Avatar src={value} alt="Product" />,
      },
      {
        Header: "Артикул",
        accessor: "article",
      },
      {
        Header: "Наименование товара",
        accessor: "name",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.quantityText}</div>
            <div style={{ fontSize: "0.8em", color: "#666" }}>
              {row.original.name}
            </div>
          </div>
        ),
      },
      {
        Header: "Дата создания",
        accessor: "date",
        Cell: ({ row }) => (
          <div>
            <div>{row.original.date}</div>
            <div style={{ fontSize: "0.8em", color: "#666" }}>
              {row.original.time}
            </div>
          </div>
        ),
      },
      {
        Header: "Кол-во",
        accessor: "quantity",
      },
      {
        Header: "Цена товара",
        accessor: "price",
        Cell: ({ row }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{row.original.price}</div>
            <div style={{ color: "red", marginLeft: "5px" }}>
              {row.original.discount}
            </div>
          </div>
        ),
      },
      {
        Header: "Текущая цена",
        accessor: "currentPrice",
        Cell: ({ value }) => <span style={{ color: "blue" }}>{value}</span>,
      },
    ],
    [selectedId] // Зависимость от selectedId
  );

  // Функция для обработки клика по чекбоксу или id
  const handleCheckboxClick = (id) => {
    // if(id === )
    console.log("work");
    setSelectedId((prevState) => {
      if (!prevState.includes(id)) {
        return [...prevState, id];
      } else {
        return prevState.filter((item) => item !== id);
      }
    }); // Сбрасываем выбранный id, если кликнул повторно
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    usePagination
  );

  return (
    <Paper>
      <Box>
        <TableContainer>
          <Table {...getTableProps()} style={{ minWidth: 650 }}>
            <StyledHeader>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <StyledTableCell {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
            </StyledHeader>
            <TableBody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return <TableItem row={row} onChange={handleCheckboxClick} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={data.length}
          page={pageIndex}
          onPageChange={(_, newPage) => gotoPage(newPage)}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
          rowsPerPageOptions={[5, 10]}
        />
      </Box>
    </Paper>
  );
};

export default MyTable;

const StyledHeader = styled(TableHead)(() => ({
  backgroundColor: "#4c5566",
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: "#fff", // Белый цвет текста для заголовков
}));
