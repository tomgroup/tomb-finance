export enum ActionType {
  GET_COLOR_INDEX_SUCCESS = "GET_COLOR_INDEX_SUCCESS",
}

interface actionSuccess {
  type: ActionType.GET_COLOR_INDEX_SUCCESS;
  payload: Number;
}

export type Action = actionSuccess;
