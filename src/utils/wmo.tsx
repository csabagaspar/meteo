import React from "react";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloudIcon from "@mui/icons-material/Cloud";
import FoggyIcon from "@mui/icons-material/Foggy";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SnowingIcon from "@mui/icons-material/Snowing";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";

export const wmoToName = (wmoCode: number): string => {
  if (wmoCode === 0) return "Sunny";
  if ([1, 2, 3].includes(wmoCode)) return "Partly cloudy";
  if ([45, 48].includes(wmoCode)) return "Fog";
  if ([51, 53, 55].includes(wmoCode)) return "Drizzle";
  if ([56, 57, 66, 67].includes(wmoCode)) return "Sleet";
  if ([61, 63, 65].includes(wmoCode)) return "Rainy";
  if ([71, 73, 75, 77, 85, 86].includes(wmoCode)) return "Snowy";
  if ([80, 81, 82].includes(wmoCode)) return "Shower";
  if (wmoCode === 95) return "Thunderstorm";
  if ([96, 99].includes(wmoCode)) return "Hail";
  return "Cloudy";
};

export const wmoToIcon = (wmoCode: number) => {
  const name = wmoToName(wmoCode);

  switch (name) {
    case "Sunny":
      return <SunnyIcon />;
    case "Partly_cloudy":
      return <CloudIcon />;
    case "Fog":
      return <FoggyIcon />;
    case "Drizzle":
      return <WaterDropIcon />;
    case "Sleet":
      return <WaterDropIcon />;
    case "Rainy":
      return <WaterDropIcon />;
    case "Shower":
      return <WaterDropIcon />;
    case "Thunderstorm":
      return <ThunderstormIcon />;
    case "Snowy":
      return <SnowingIcon />;
    case "Hail":
      return <CloudySnowingIcon />;
    default:
      return <CloudIcon />;
  }
};
