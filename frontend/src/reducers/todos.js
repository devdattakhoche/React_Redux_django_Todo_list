import _ from "lodash";
import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO // added
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    case GET_TODO:
    case ADD_TODO:
    case EDIT_TODO: // added
      return {
        ...state,
        [action.payload.id]: action.payload
      };
      case DELETE_TODO: // added
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
