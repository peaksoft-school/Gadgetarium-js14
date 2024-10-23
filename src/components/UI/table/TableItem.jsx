import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";

export const TableItem = ({ row, onChange }) => {
  const changeHandler = () => {
    onChange(row.id);
  };
  return (
    <div>
      <TableRow {...row.getRowProps()} onClick={() => changeHandler()}>
        {row.cells.map((cell) => (
          <TableCell {...cell.getCellProps()}>{cell.render(`Cell`)}</TableCell>
        ))}
      </TableRow>
    </div>
  );
};
