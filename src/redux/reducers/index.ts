import { Action, ActionType } from "../actionTypes/index";

interface State {
  index: Number | null;
}

const initialState = {
  index: null,
};

const colorReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_COLOR_INDEX_SUCCESS:
      return {
        index: action.payload,
      };

    default:
      return state;
  }
};

export default colorReducer;
