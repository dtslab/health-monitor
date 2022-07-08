import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeWeight, selectWeights } from "./weightsSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddWeightForm } from "./AddWeightForm";
import TableChartIcon from "@mui/icons-material/TableChart";

export default function WeightTable() {
  const dispatch = useDispatch();
  const handleRemoveWeight = (weight) => {
    dispatch(removeWeight(weight));
  };
  const weights = useSelector(selectWeights);

  return (
    <React.Fragment>
            <Box sx={{ display: "flex",}}>
      <TableChartIcon sx={{ mr: 1, mt: 0.5 }} />

      <Typography component="h2" variant="h6" gutterBottom>
        Weight Table
      </Typography></Box>

      <Table size="small" sx={{ color: "#01BCD4" }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weights.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.value} lbs</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() => handleRemoveWeight(row)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <AddWeightForm />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
