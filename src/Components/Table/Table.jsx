import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "../Rating/Rating";

const MainTable = ({ columns, rows }) => {


    let rowsArray = Object.values(rows);


  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                align={column.align || "left"}
                sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsArray.length > 0 ? (
            rowsArray.map((row) => (
              <TableRow key={row.id} hover>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    align={column.align || "left"}
                    component={column.field === columns[0].field ? "th" : "td"}
                    scope={
                      column.field === columns[0].field ? "row" : undefined
                    }
                  >
                    {column.field === "rating" ? (
                      <Rating score={row.rate} />
                    ) : column.field === "actions" ? (
                      column.renderCell(row)
                    ) : column.field === "src" ? (
                      column.renderCell(row)
                    ) : (
                      row[column.field]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <Typography color="textSecondary">No data available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
