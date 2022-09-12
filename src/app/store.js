import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../components/features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
