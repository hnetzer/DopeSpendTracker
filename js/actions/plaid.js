"use strict";

const PLAID_TOKEN_REQUEST = "PLAID_TOKEN_REQUEST";
const PLAID_TOKEN_RESPONSE = "PLAID_TOKEN_RESPONSE";
const PLAID_TOKEN_ERROR = "PLAID_TOKEN_ERROR";

function plaidTokenRequest() {
  return {
    type: PLAID_TOKEN_REQUEST
  }
}

function plaidTokenResponse(data) {
  return {
    type: PLAID_TOKEN_RESPONSE,
    data: data
  }
}

function plaidTokenError() {
  return {
    type: PLAID_TOKEN_ERROR,
    error: error
  }
}

function getAccessToken(public_token) {
  return dispatch => {
    dispatch(plaidTokenRequest())
    fetch("http://localhost:8000/get_access_token", {
      method: 'POST',
      body: JSON.stringify({ public_token: public_token }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(resp => {
      // { access_token: string, error: object, item_id: string }
      // TODO: handle error response from  successfull (200) requests
      console.log("request response:")
      console.log(resp)
      dispatch(plaidTokenResponse(resp))
    })
    .catch(err => {
      dispatch(plaidTokenError(err))
    })
  };
}


module.exports = {
  getAccessToken,
  PLAID_TOKEN_REQUEST,
  PLAID_TOKEN_RESPONSE,
  PLAID_TOKEN_ERROR
};
