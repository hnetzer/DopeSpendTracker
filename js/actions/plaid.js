'use strict';

import {API_BASE_URI} from 'react-native-dotenv';

const PLAID_TOKEN_REQUEST = 'PLAID_TOKEN_REQUEST';
const PLAID_TOKEN_RESPONSE = 'PLAID_TOKEN_RESPONSE';
const PLAID_TOKEN_ERROR = 'PLAID_TOKEN_ERROR';

function plaidTokenRequest() {
  return {
    type: PLAID_TOKEN_REQUEST,
  };
}

function plaidTokenResponse(data) {
  return {
    type: PLAID_TOKEN_RESPONSE,
    data: data,
  };
}

function plaidTokenError(error) {
  return {
    type: PLAID_TOKEN_ERROR,
    error: error,
  };
}

function getAccessToken(linkData) {
  return dispatch => {
    dispatch(plaidTokenRequest());
    fetch(`${API_BASE_URI}/get_access_token`, {
      method: 'POST',
      body: JSON.stringify({public_token: linkData.publicToken}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        // { access_token: string, error: object, item_id: string }
        // TODO: handle error response from  successfull (200) requests
        console.log('got response from API');
        dispatch(
          plaidTokenResponse({
            accessToken: resp.access_token,
            itemId: resp.item_id,
            institution: linkData.institution,
            accounts: linkData.accounts,
          }),
        );

        // next, let's do the work to get the transactions here as well
        dispatch(getTransactions(resp.access_token));
      })
      .catch(err => {
        dispatch(plaidTokenError(err));
      });
  };
}

const PLAID_TRANSACTION_REQUEST = 'PLAID_TRANSACTION_REQUEST';
const PLAID_TRANSACTION_RESPONSE = 'PLAID_TRANSACTION_RESPONSE';
const PLAID_TRANSACTION_ERROR = 'PLAID_TRANSACTION_ERROR';

function plaidTransactionRequest() {
  return {
    type: PLAID_TRANSACTION_REQUEST,
  };
}

function plaidTransactionResponse(data) {
  return {
    type: PLAID_TRANSACTION_RESPONSE,
    data: data,
  };
}

function plaidTransactionError(error) {
  return {
    type: PLAID_TRANSACTION_ERROR,
    error: error,
  };
}

function getTransactions(accessToken) {
  return dispatch => {
    dispatch(plaidTransactionRequest());
    fetch(`${API_BASE_URI}/transactions?access_token=${accessToken}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log('got transactions response');
        dispatch(plaidTransactionResponse(resp.transactions));
        console.log(resp.transactions);
      })
      .catch(err => {
        dispatch(plaidTokenError(err));
      });
  };
}

module.exports = {
  getAccessToken,
  PLAID_TOKEN_REQUEST,
  PLAID_TOKEN_RESPONSE,
  PLAID_TOKEN_ERROR,
  getTransactions,
};
