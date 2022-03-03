import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const setAddress = (address: string) => {
  return async (dispatch: Dispatch<Action>) => {
    
    dispatch({
      type: ActionType.SET_ADDRESS,
      payload: address,
    });
  };
};
