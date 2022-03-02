import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getColor = (postId: Number) => {
  return async (dispatch: Dispatch<Action>) => {
    
    dispatch({
      type: ActionType.GET_COLOR_INDEX_SUCCESS,
      payload: postId,
    });
  };
};
