"use strict";

import {
  PLAID_TOKEN_REQUEST,
  PLAID_TOKEN_RESPONSE,
  PLAID_TOKEN_ERROR
} from 'js/actions';

function config(state = { }, action) {
  switch (action.type) {
      case PLAID_TOKEN_RESPONSE:
        return {
          accessToken: action.data.access_token,
          itemId: action.data.item_id
        };
      case PLAID_TOKEN_ERROR:
      case PLAID_TOKEN_REQUEST:
      default:
          return state
  }
}

module.exports = config;
