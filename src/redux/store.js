import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recentWorkReducer from "./features/worksSlice";
import { api } from "./api";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recentWork"],
};

const rootReducer = combineReducers({
  recentWork: recentWorkReducer,

  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
