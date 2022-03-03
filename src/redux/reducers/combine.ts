import { combineReducers } from "redux";
import AddressReducer from "./index";

const reducers = combineReducers({
  address: AddressReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
