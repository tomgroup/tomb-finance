import { Action, ActionType } from "../actionTypes/index";

interface State {
  address: string | null;
}

const initialState = {
  address: "",
};

const AddressReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_ADDRESS:
      return {
        address: action.payload,
      };

    default:
      return state;
  }
};

export default AddressReducer;
