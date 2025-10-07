import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getV1Forecast: build.query<GetV1ForecastApiResponse, GetV1ForecastApiArg>({
      query: (queryArg) => ({
        url: `/v1/forecast`,
        params: {
          latitude: queryArg.latitude,
          longitude: queryArg.longitude,
          timezone: queryArg.timezone,
          daily: queryArg.daily,
          current: queryArg.current,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as forcastApi };
export type GetV1ForecastApiResponse = /** status 200 OK */ ForecastResponse;
export type GetV1ForecastApiArg = {
  /** Geographical WGS84 coordinates of the location. Multiple coordinates can be comma separated. E.g. &latitude=52.52,48.85&longitude=13.41,2.35. To return data for multiple locations the JSON output changes to a list of structures. CSV and XLSX formats add a column location_id. */
  latitude: number;
  /** Geographical WGS84 coordinates of the location. Multiple coordinates can be comma separated. E.g. &latitude=52.52,48.85&longitude=13.41,2.35. To return data for multiple locations the JSON output changes to a list of structures. CSV and XLSX formats add a column location_id. */
  longitude: number;
  /** If timezone is set, all timestamps are returned as local-time and data is returned starting at 00:00 local-time. Any time zone name from the time zone database is supported. If auto is set as a time zone, the coordinates will be automatically resolved to the local time zone. For multiple coordinates, a comma separated list of timezones can be specified. */
  timezone?: string;
  /** A list of daily weather variable aggregations which should be returned. Values can be comma separated, or multiple &daily= parameter in the URL can be used. If daily weather variables are specified, parameter timezone is required. */
  daily?: string;
  /** A list of weather variables to get current conditions. */
  current?: string;
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
export type BadRequest = {
  error: boolean;
  reason: string;
};
export const { useGetV1ForecastQuery } = injectedRtkApi;
