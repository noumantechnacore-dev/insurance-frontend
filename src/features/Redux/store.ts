import { configureStore } from "@reduxjs/toolkit";
import insuranceReducer from "./insuranceSlice";

export const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
