import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import todoReducer from "./todoSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const ignoreRegisterMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (action.type !== "REGISTER") {
      return next(action);
    }
  };

export const store = configureStore({
  reducer: persistReducer(persistConfig, todoReducer),
  middleware: [ignoreRegisterMiddleware],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
