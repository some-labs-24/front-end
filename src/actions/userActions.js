import { INITIALIZE_USER, DISCONNECT_TWITTER } from "./userActionTypes";

export const initializeUser = (authService, history) => async (dispatch) => {
  try {
    var user = await authService.getUser();
  } catch (err) {
    console.log(err);
  }

  if (!authService.getAuthState().isAuthenticated) return;
  const { sub, email, twitter_handle } = user;
  if (!twitter_handle) history.push("/connect/twitter");

  dispatch({
    type: INITIALIZE_USER,
    payload: {
      initialized: true,
      okta_uid: sub,
      email,
      twitter_handle,
    },
  });
};

export const disconnectTwitter = () => (dispatch) => {
  dispatch({
    type: DISCONNECT_TWITTER,
  });
};
