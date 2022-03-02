import { Action, ActionType } from "../actionTypes/index";

interface State {
  isModalOpen: boolean;
}

const initialState = {
  isModalOpen: false,
};

const ModalReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_WALLTMODAL_OPEN:
      return {
        isModalOpen: action.payload,
      };

    default:
      return state;
  }
};

export default ModalReducer;
