import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import listSlice from "../features/list/list-slice";
import { itunesAPI } from "../services/itunes-api";

export const createStore = () =>
  configureStore({
    reducer: {
      [itunesAPI.reducerPath]: itunesAPI.reducer,
      list: listSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itunesAPI.middleware),
  });
export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
