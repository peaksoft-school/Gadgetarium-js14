import {
  Avatar,
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
} from "@mui/material";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { editLine, garbage } from "../../../assets/icon";
import styled from "@emotion/styled";

const MyTable = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        photo:
          "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
        article: "154665884",
        Quantity: "Количество товара 105шт",
        name: "Samsung Galaxy S21...",
        date: "05.05.2022 ",
        time:'14:10',

        quantity: 1,
        price: "50 000с",
        currentPrice: "45 000с",
      },
      {
        id: 2,
        photo:
          "https://s3-alpha-sig.figma.com/img/d1d0/716a/1f94c403348e4865f14e07a0e7405cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pj0jqcLkzBBJfpJpro61BH6-CDpLsvI5oFFDkOYS3~LzmouOec30SbQPOT30B2WHpCngLEq5zdoiFLlc15OjtYkWYGlZjeaE~xyZ90WZFr1s~TS53UGkyPb5YAzgDANQ4ZBGMupbrSCJwkTkYpfN~ezEYMEY8cmTxr2wh6lv8Az16FVW0tduRZmGWPwnOH9vc0FL59p8iuA4nFghoSaZHdobrBPLjzGpSsoJS193eHxtWfzOarj~NOdozzJYDT0jHbWrWibYeISxz~Em~G9Ffdfw9n5jC~RWXh7ODE5f4weE1DK2WEqoyUPvJQ68wcHBmuCC76GBfApisKNG~OySIA__",
        article: "154665885",
        Quantity: "Количество товара 50шт",
        name: "iPhone 13 Pro...",
        date: "06.06.2022 ",
        time:'14:10',
        quantity: 1,
        price: "70 000с",
        currentPrice: "65 000с",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
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
            <div>{row.original.Quantity}</div>
            <div style={{ fontSize: "0.8em", color: "#666" }}>{row.original.name}</div>
          </div>
        ),
      },
      {
        Header: "Дата создания",
        accessor: "date",
        Cell:({row})=>(
          <div>




            
          </div>
        )
      },
      {
        Header: "Кол-во",
        accessor: "quantity",
      },
      {
        Header: "Цена товара",
        accessor: "price",
        Cell: ({ value }) => (
          <div>
            {value} <span style={{ color: "red" }}>15%</span>
          </div>
        ),
      },
      {
        Header: "Текущая цена",
        accessor: "currentPrice",
        Cell: ({ value }) => <span style={{ color: "blue" }}>{value}</span>,
      },
      {
        Header: "Действия",
        accessor: "actions",
        Cell: () => (
          <div>
            <img src={editLine} alt="edit" />
            <img src={garbage} alt="delete" />
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 7 } },
    usePagination
  );

  return (
    <Paper>
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
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
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
        rowsPerPageOptions={[5, 7, 10]}
      />
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>
      </div>
    </Paper>
  );
};

export default MyTable;

const StyledHeader = styled(TableHead)(() => ({
  backgroundColor: "#4c5566",
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: "#fff", // Цвет текста белый
}));
