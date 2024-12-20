import { useState } from "react";
import {
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
import styled from "@emotion/styled";
import { usePagination, useTable } from "react-table";


const ProductTable = ({ data, columns }) => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxClick = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
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

  console.log("test");

  return (
    <Paper>
      <Box>
        <TableContainer>
          <Table {...getTableProps()} style={{ minWidth: 650 }}>
            <StyledHeader>
              {headerGroups.map((headerGroup, i) => (
                <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, colIndex) => (
                    <StyledTableCell
                      key={colIndex}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
            </StyledHeader>
            <TableBody {...getTableBodyProps()}>
              {page.map((row, rowIndex) => {
                prepareRow(row);
                const rowId = row.original.id;
                return (
                  <TableRow
                    key={rowIndex}
                    {...row.getRowProps()}
                    onMouseEnter={() => setHoveredRowId(rowId)}
                    onMouseLeave={() => setHoveredRowId(null)}
                  >
                    <StyledBodyCell>
                      {hoveredRowId === rowId ? (
                        <Checkbox
                          checked={selectedIds.includes(rowId)}
                          onChange={() => handleCheckboxClick(rowId)}
                        />
                      ) : (
                        rowId
                      )}
                    </StyledBodyCell>
                    {row.cells.map((cell, index) => {
                      if (cell.column.id !== "id") {
                        return (
                          <StyledBodyCell {...cell.getCellProps()} key={index}>
                            {cell.render("Cell")}
                          </StyledBodyCell>
                        );
                      }
                      return null;
                    })}
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
