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
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { usePagination, useTable } from "react-table";
import { getIds } from "../../../store/productAdmin/productAdminSlice";
import { useDispatch } from "react-redux";

const ProductTable = ({ data, columns }) => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const dispatch = useDispatch();
  const handleCheckboxClick = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );

    if (selectedIds.length > 0) {
      dispatch(getIds(selectedIds));
    }
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
          {data.length === 0 ? (
            <Typography variant="h6" align="center" style={{ padding: "20px" }}>
              Нет данных
            </Typography>
          ) : (
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
                  const rowId = row.original.subProductId;

                  return (
                    <TableRow
                      key={crypto.randomUUID()}
                      {...row.getRowProps()}
                      onMouseEnter={() => setHoveredRowId(rowId)}
                      onMouseLeave={() => setHoveredRowId(null)}
                    >
                      {row.cells.map((cell, index) => (
                        <StyledBodyCell
                          key={crypto.randomUUID()}
                          {...cell.getCellProps()}
                        >
                          {index === 0 ? (
                            hoveredRowId === rowId ? (
                              <Checkbox
                                checked={selectedIds.includes(rowId)}
                                onChange={() => handleCheckboxClick(rowId)}
                              />
                            ) : (
                              rowId
                            )
                          ) : (
                            cell.render("Cell")
                          )}
                        </StyledBodyCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
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
  border: 1px solid #000;
`;

const StyledBodyCell = styled(TableCell)`
  color: #000000;
  border: 1px solid #000;
`;

export default ProductTable;
