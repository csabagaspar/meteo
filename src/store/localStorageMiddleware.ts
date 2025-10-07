import { Middleware } from "redux";
import { saveState } from "./localStorage";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { CitySlice } from "./cityReducer";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const { type, payload } = action as PayloadAction<CitySlice>;
    if (type === "city/setCity") {
      saveState({
        city: payload.city,
      });
    }
    return next(action);
  };
