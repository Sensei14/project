import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import isLoggedReducer from "./reducers/loggedReducer";
import itemReducer from "./reducers/itemReducer";

const rootReducer = combineReducers({
  user: userReducer,
  isLogged: isLoggedReducer,
  items: itemReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
