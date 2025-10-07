import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

type CityChartProps = {
  days: string[];
  data: number[];
};
const CityChart = (props: CityChartProps) => {
  const { days, data } = props;
  return (
    <LineChart
      xAxis={[{ scaleType: "band", data: days }]}
      series={[
        {
          data,
        },
      ]}
      height={300}
    />
  );
};
export const CityChartSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={596} height={300} />
    </Stack>
  );
};
export default CityChart;
