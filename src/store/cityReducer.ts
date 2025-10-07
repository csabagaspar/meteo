import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { City } from "../api/cityApi";

export type CitySlice = {
  city: City | null;
};

export const initialState: CitySlice = {
  city: null,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state: CitySlice, action: PayloadAction<CitySlice>) => {
      state.city = action.payload.city;
    },
  },
});

export const { setCity } = citySlice.actions;
export const { getInitialState } = citySlice;

export const selectCity = (state: RootState) => state.city.city;

export default citySlice.reducer;
