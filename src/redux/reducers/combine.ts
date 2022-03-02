import { combineReducers } from "redux";
import colorReducer from "./index";

const reducers = combineReducers({
  color: colorReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
