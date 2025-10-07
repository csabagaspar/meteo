import axios from "axios";

export type GetV1SearchApiArg = {
  name: string;
  language: string;
};

export type Postcodes = string[];
export type City = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: Postcodes;
  country_id: number;
  country: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
};

export type SearchResponse = {
  results?: City[];
  generationtime_ms: number;
};

export const searchCity = async (
  args: GetV1SearchApiArg,
): Promise<SearchResponse | null> => {
  const { data, status } = await axios.get<SearchResponse>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${args.name}&language=${args.language}`,
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};

/* Axios forcast api ***DEBUG*** purpose only */
export type GetV1ForecastApiArg = {
  latitude: number;
  longitude: number;
  timezone: string;
  daily: string;
  current: string;
};

export type CurrentUnits = {
  time: string;
  temperature_2m: string;
  weather_code: string;
  interval: string;
};
export type Current = {
  time: string;
  temperature_2m: number;
  interval: number;
  weather_code: number;
};
export type DailyUnits = {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_mean: string;
};
export type Time = string[];
export type WeatherCode = number[];
export type Temperature2MMax = number[];
export type Temperature2MMin = number[];
export type PrecipitationProbabilityMean = number[];
export type Daily = {
  time: Time;
  weather_code: WeatherCode;
  temperature_2m_max: Temperature2MMax;
  temperature_2m_min: Temperature2MMin;
  precipitation_probability_mean: PrecipitationProbabilityMean;
};
export type ForecastResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  daily_units: DailyUnits;
  daily: Daily;
};
export const fetchForcast = async (
  args: GetV1ForecastApiArg,
): Promise<ForecastResponse | null> => {
  const { data, status } = await axios.get<ForecastResponse>(
    `https://api.open-meteo.com/v1/forecast?latitude=${args.latitude}&longitude=${args.longitude}&daily=${args.daily}&current=${args.current}&timezone=${args.timezone}`,
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};
