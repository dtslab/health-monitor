import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MyStatus from "./MyStatus";
import WeightTable from "../weights/WeightTable";
import { WeightChart } from "../weights/WeightChart";

export const Home=()=>{
    return(
             <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={8}>
                <Paper data-aos="zoom-in" data-aos-duration="1000"
                  sx={{
                    p:3,
                    display:'flex',
                    flexDirection:'column',
                    height:250,
                    bgcolor:'#EDE6F6'
                  }}
                >
                  <WeightChart />
                </Paper>
              </Grid>
              {/* MyStatus  */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper data-aos="zoom-in" data-aos-duration="1500"
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 250,
                    bgcolor: '#72aee5'
                  }}
                >
                  <MyStatus />
                </Paper>
              </Grid>
              {/* Weight Table*/}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}
                data-aos="zoom-in" data-aos-duration="2000">
                  <WeightTable />
                </Paper>
              </Grid>
            </Grid>
     )
}
