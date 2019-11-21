"use strict";

function getAccessToken(public_token) {
  return dispatch => {
    // Send the public_token to an internal server
    // and exchange it for an access_token.
    fetch("http://localhost:8000/get_access_token", {
      method: "POST",
      body: {
        public_token: public_token,
        // accounts: metadata.accounts,
        // institution: metadata.institution,
        // link_session_id: metadata.link_session_id,
      },
    });

    // TODO: Make sure reducers clear their state
    return dispatch({
      type: "GETTING_ACCESS_TOKEN"
    });
  };
}


module.exports = { getAccessToken };
