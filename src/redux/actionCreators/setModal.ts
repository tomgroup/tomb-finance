import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const setModal = (isOpen: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    
    dispatch({
      type: ActionType.GET_WALLTMODAL_OPEN,
      payload: isOpen,
    });
  };
};
