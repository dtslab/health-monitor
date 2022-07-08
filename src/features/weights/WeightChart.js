import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  CartesianGrid,
  Area,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { selectWeights } from "./weightsSlice";
import { useSelector } from "react-redux";
import { AddWeightForm } from "./AddWeightForm";
import ScaleIcon from "@mui/icons-material/Scale";
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={12}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}
export function WeightChart() {
  const weights = useSelector(selectWeights);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <ScaleIcon sx={{ mr: 1, mt: 0.5 }} />
        <Typography
          component="h2"
          variant="h6"
          color="#5E35B2"
          gutterBottom
          sx={{ flex: "auto" }}
        >
          Weight Chart
        </Typography>
        <AddWeightForm />
      </Box>

      <ResponsiveContainer >
        <AreaChart
          
          data={weights}
          margin={{
            top: 20,
            right: 40,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="value" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            isAnimationActive={true}
            dot={true}
            label={<CustomizedLabel />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
