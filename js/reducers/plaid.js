"use strict";

import { createReducer } from '@reduxjs/toolkit'

import {
  PLAID_TOKEN_REQUEST,
  PLAID_TOKEN_RESPONSE,
  PLAID_TOKEN_ERROR
} from 'js/actions';


const initialState = {
  institutions: [],
}

const plaid = createReducer(initialState, {
  PLAID_TOKEN_RESPONSE: (state, action) => {
    console.log("in the reducer function")
    state.institutions = [{
      accessToken: action.data.accessToken,
      itemId: action.data.itemId,
      name: action.data.institution.name,
      accounts: action.data.accounts
    }];
  },
  PLAID_TOKEN_ERROR: (state, action) => {

  },
  PLAID_TOKEN_REQUEST: (state, action) => {

  }
});

module.exports = plaid;
