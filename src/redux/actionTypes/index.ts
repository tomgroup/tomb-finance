export enum ActionType {
  GET_WALLTMODAL_OPEN = "GET_WALLTMODAL_OPEN",
}

interface actionSuccess {
  type: ActionType.GET_WALLTMODAL_OPEN;
  payload: boolean;
}

export type Action = actionSuccess;
