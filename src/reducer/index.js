import { combineReducers } from "redux";
import {
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


const rootReducer = combineReducers({
  contacts,
});

export default rootReducer;
