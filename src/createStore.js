import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers/index";

export const middlewares = [ReduxThunk];
export const createStoreMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreMiddleware(RootReducer);
