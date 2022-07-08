import React from "react";
import { Paper} from "@mui/material";
import { WeightChart } from "./WeightChart";
import WeightTable from "./WeightTable";



export function Weights() {
  return (
   <React.Fragment>
        <Paper  data-aos="zoom-in" data-aos-duration="1000"
          sx={{
            p: 3,
            
            display: "flex",
            flexDirection: "column",
            height: 350,
          }}
        >
          <WeightChart />
        </Paper>
        <Paper sx={{ p: 2, display: "flex", mt:3,flexDirection: "column" }}  data-aos="zoom-in" data-aos-duration="1500">
        <WeightTable />
      </Paper>
      </React.Fragment>
  );
}
