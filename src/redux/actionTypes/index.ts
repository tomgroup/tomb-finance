export enum ActionType {
  SET_ADDRESS = "SET_ADDRESS",
}

interface actionSuccess {
  type: ActionType.SET_ADDRESS;
  payload: string;
}

export type Action = actionSuccess;
