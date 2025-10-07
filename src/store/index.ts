import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { forcastApi } from "../api/forcastApi";
import cityReducer from "./cityReducer";
import { loadState } from "./localStorage";
import { localStorageMiddleware } from "./localStorageMiddleware";

const city = loadState();

export const rootReducer = combineReducers({
  city: cityReducer,
  [forcastApi.reducerPath]: forcastApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(forcastApi.middleware, localStorageMiddleware),
  preloadedState: {
    city,
  },
});

export type AppDispatch = typeof store.dispatch;
