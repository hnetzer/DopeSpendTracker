"use strict";

function getAccessToken(public_token) {
  return dispatch => {

    console.log('in the dispatch function, sending the request')
    // Send the public_token to an internal server
    // and exchange it for an access_token.
    return fetch("http://localhost:8000/get_access_token", {
      method: "POST",
      body: {
        public_token: public_token,
        // accounts: metadata.accounts,
        // institution: metadata.institution,
        // link_session_id: metadata.link_session_id,
      },
    }).then(data => dispatch({ type: "GOT_THIS_SHIT" }))

    // TODO: Make sure reducers clear their state
    return dispatch({
      type: "GETTING_ACCESS_TOKEN"
    });
  };
}


module.exports = { getAccessToken };
