import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectStatus } from "../status/statusSlice";
import { EditStatusForm } from "../status/EditStatusForm";
import { Box } from "@mui/material";
import { selectWeights } from "../weights/weightsSlice";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


export default function MyStatus() {
  const status = useSelector(selectStatus);
  const weights = useSelector(selectWeights);
  return (
    <React.Fragment>
      <Box sx={{ display: "flex",justifyContent:'center'}}>
      <SignalCellularAltIcon sx={{ mr: 1, mt: 0.5,color:'white' }} />

        <Typography
          component="h2"
          variant="h6"
          color="white"
          gutterBottom
          sx={{ flex: "auto" }}
        >
          My Status
        </Typography>
        <EditStatusForm />
      </Box>
      
      <Typography color="white" sx={{ flex: 1, fontFamily:'sans-serif' }}>
        Height: {Math.trunc(status.height / 12)}ft {status.height % 12}in
      </Typography>
      <Typography color="white" sx={{ flex: 1,  fontFamily:'sans-serif' }}>
        Weight: {weights.length !== 0 ? weights[weights.length - 1].value : 0}{" "}
        lbs
      </Typography>
      <Typography color="white" sx={{ flex: 1,  fontFamily:'sans-serif' }}>
        BMI:{" "}
        {weights.length !== 0
          ? (
              (703 * weights[weights.length - 1].value) /
              (status.height * status.height)
            ).toFixed(1)
          : 0}
        {" "}(Healthy: 19-24)
      </Typography>
      <Typography color="white" sx={{ flex: 1,  fontFamily:'sans-serif' }}>
        Goal Weight: {status.goalWeight}
      </Typography> 
     
    </React.Fragment>
  );
}
