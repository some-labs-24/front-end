import {
  INITIALIZE_USER,
  DISCONNECT_TWITTER,
} from "../actions/userActionTypes";

const initialState = {
  initialized: false,
  okta_uid: null,
  email: null,
  twitter_handle: null,
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case INITIALIZE_USER:
      for (let key in action.payload) {
        newState[key] = action.payload[key];
      }
      break;

    case DISCONNECT_TWITTER:
      newState["twitter_handle"] = null;
      break;

    default:
      break;
  }

  return newState;
};

export default userReducer;
