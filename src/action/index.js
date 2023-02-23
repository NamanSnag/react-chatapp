export const CONTACT_LIST = 'CONTACT_LIST';

export const contactList = () => {
    return {
        type: CONTACT_LIST,
        payload: []
    };
}

export const SET_ALERT = "SET_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

export function setAlert(type, message) {
  return {
    type: SET_ALERT,
    payload: { type, message },
  };
}

export function clearAlert() {
  return {
    type: CLEAR_ALERT,
  };
}
