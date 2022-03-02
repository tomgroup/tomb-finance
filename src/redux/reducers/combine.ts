import { combineReducers } from "redux";
import ModalReducer from "./index";

const reducers = combineReducers({
  isModalOpen: ModalReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
