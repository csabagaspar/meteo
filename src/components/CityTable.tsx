import React from "react";
import { Table, TableCell, TableBody, TableRow } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

type CityTableProps = {
  days: string[];
  icons: any[];
  precipitations: number[];
  precipitationUnit: string;
  temperatureMins: number[];
  temperatureMinUnit: string;
  temperatureMaxs: number[];
  temperatureMaxUnit: string;
};
const CityTable = (props: CityTableProps) => {
  const {
    days,
    icons,
    precipitations,
    precipitationUnit,
    temperatureMins,
    temperatureMinUnit,
    temperatureMaxs,
    temperatureMaxUnit,
  } = props;
  return (
    <>
      <Typography variant="body1">7 day forcast</Typography>
      <Box sx={{ m: 2 }} />
      <Table padding="none">
        <TableBody>
          {new Array(7).fill(true).map((value: boolean, index: number) => {
            return (
              <TableRow>
                <TableCell>{days[index]}</TableCell>
                <TableCell>
                  {icons[index]}
                  {precipitations[index]}
                  {precipitationUnit}
                </TableCell>
                <TableCell>
                  {temperatureMins[index]}
                  {temperatureMinUnit}/{temperatureMaxs[index]}
                  {temperatureMaxUnit}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
export const CityTableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={596} height={24} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
      <Skeleton variant="rounded" width={596} height={30} />
    </Stack>
  );
};
export default CityTable;
