import React from "react";
import City, { CitySkeleton } from "../components/City";
import CityTable, { CityTableSkeleton } from "../components/CityTable";
import CityChart, { CityChartSkeleton } from "../components/CityChart";
import { useGetV1ForecastQuery } from "../api/forcastApi";
import { useSelector } from "react-redux";
import { selectCity } from "../store/cityReducer";
import { wmoToName, wmoToIcon } from "../utils/wmo";
import moment from "moment";
import Box from "@mui/material/Box";

const Forcast = () => {
  const city = useSelector(selectCity);
  const [skip, setSkip] = React.useState<boolean>(true);

  const { data: forcast } = useGetV1ForecastQuery(
    {
      latitude: city ? city.latitude : 0,
      longitude: city ? city.longitude : 0,
      daily:
        "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_mean",
      current: "temperature_2m,weather_code",
      timezone: "CET",
    },
    {
      skip,
    },
  );

  React.useEffect(() => {
    if (city) {
      setSkip(false);
    } else {
      setSkip(true);
    }
  }, [city]);

  return city && forcast?.daily_units && forcast?.daily ? (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Box sx={{ m: 5 }}>
        <City
          name={city.name}
          temperature={forcast.current.temperature_2m}
          temperatureUnit={forcast.current_units.temperature_2m}
          weather={wmoToName(forcast.current.weather_code)}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <Box sx={{ my: 5 }}>
          <CityTable
            days={getDays(forcast.daily.time)}
            icons={getWeatherIcons(forcast.daily.weather_code)}
            precipitations={forcast.daily.precipitation_probability_mean}
            precipitationUnit={
              forcast.daily_units.precipitation_probability_mean
            }
            temperatureMins={forcast.daily.temperature_2m_min}
            temperatureMinUnit={forcast.daily_units.temperature_2m_min}
            temperatureMaxs={forcast.daily.temperature_2m_max}
            temperatureMaxUnit={forcast.daily_units.temperature_2m_max}
          />
          <Box sx={{ my: 5 }}>
            <CityChart
              data={forcast.daily.temperature_2m_max}
              days={getDays(forcast.daily.time)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Box sx={{ m: 5 }}>
          <CitySkeleton />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <Box sx={{ my: 5 }}>
            <CityTableSkeleton />
            <Box sx={{ my: 5 }}>
              <CityChartSkeleton />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const getDays = (times: string[]): string[] => {
  const days = new Array<string>();
  times.forEach((time) => {
    days.push(moment(time, "YYYY-MM-DD").format("dddd"));
  });
  return days;
};

const getWeatherIcons = (weatherCodes: number[]) => {
  const weatherIcons = new Array<any>();
  weatherCodes.forEach((weatherCode) => {
    weatherIcons.push(wmoToIcon(weatherCode));
  });
  return weatherIcons;
};

export default Forcast;
