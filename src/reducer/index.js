import { combineReducers } from "redux";
import {
  SET_ALERT,
  CLEAR_ALERT,
  CONTACT_LIST,
} from "../action/index";
import contactList from "../data/conversation";

function contacts(state = [...contactList], action) {
  switch (action.type) {
    case CONTACT_LIST:
        console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

function alert(state = null, action) {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case CLEAR_ALERT:
      return null;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  alert,
  contacts,
});

export default rootReducer;
