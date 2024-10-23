/* eslint-disable react/jsx-key */
import { useMemo, useState } from "react";
import {
  Avatar,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
  Box,
  Checkbox,
} from "@mui/material";
import { useTable, usePagination } from "react-table";
import styled from "@emotion/styled";
import { editLine, garbage } from "../../../assets/icon";

const ProductTable = ({ data }) => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Cell: ({ row }) =>
          hoveredRowId === row.original.id ? (
            <Checkbox
              checked={selectedIds.includes(row.original.id)}
              onChange={() => handleCheckboxClick(row.original.id)}
              disabled
            />
          ) : (
            row.original.id
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
      },
      {
        Header: "Дата создания",
        accessor: "date",
      },
      {
        Header: "Цена товара",
        accessor: "price",
        Cell: ({ row }) => (
          <>
            <div>{row.original.price}</div>
            <div style={{ color: "red", marginLeft: "5px" }}>
              {row.original.discount}
            </div>
          </>
        ),
      },
      {
        Header: "Текущая цена",
        accessor: "currentPrice",
      },
      {
        Header: "Действия",
        accessor: "actions",
        Cell: ({ row }) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src={garbage}
              alt="Удалить"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(row.original.id)}
            />
            <img
              src={editLine}
              alt="Редактировать"
              style={{ cursor: "pointer" }}
              onClick={() => handleEdit(row.original.id)}
            />
          </div>
        ),
      },
    ],
    [hoveredRowId, selectedIds]
  );

  const handleCheckboxClick = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    console.log(`Удалить элемент с ID: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Редактировать элемент с ID: ${id}`);
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
                return (
                  <TableRow
                    {...row.getRowProps()}
                    onMouseEnter={() => setHoveredRowId(row.original.id)}
                    onMouseLeave={() => setHoveredRowId(null)}
                  >
                    {row.cells.map((cell) => (
                      <StyledBodyCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </StyledBodyCell>
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
          onPageChange={(e, newPage) => gotoPage(newPage)}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
        />
      </Box>
    </Paper>
  );
};

const StyledHeader = styled(TableHead)`
  background-color: #4c5566;
`;

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  color: #ffffff;
`;

const StyledBodyCell = styled(TableCell)`
  color: #000000;
`;

export default ProductTable;
