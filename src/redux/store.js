import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root_2",
  version: 1,
  storage,
};

const reducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
