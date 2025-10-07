import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setCity } from "../store/cityReducer";

type CityProps = {
  name: string;
  temperature: number;
  temperatureUnit: string;
  weather: string;
};
const City = (props: CityProps) => {
  const dispatch = useDispatch();
  const { name, temperature, temperatureUnit, weather } = props;

  const handleOnClick = React.useCallback(() => {
    dispatch(setCity({ city: null }));
  }, [dispatch]);

  return (
    <Box>
      <Button onClick={handleOnClick} variant="text">
        {name}
      </Button>
      <Typography variant="h4" align="left">
        {temperature} {temperatureUnit}
      </Typography>
      <Typography variant="body1" align="left">
        {weather}
      </Typography>
    </Box>
  );
};
export const CitySkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={115} height={24} />
      <Skeleton variant="rounded" width={115} height={42} />
      <Skeleton variant="rounded" width={115} height={24} />
    </Stack>
  );
};
export default City;
