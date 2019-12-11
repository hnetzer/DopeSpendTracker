"use strict";

import { createReducer } from '@reduxjs/toolkit'

import {
  PLAID_TOKEN_REQUEST,
  PLAID_TOKEN_RESPONSE,
  PLAID_TOKEN_ERROR,
  PLAID_TRANSACTION_REQUEST,
  PLAID_TRANSACTION_RESPONSE,
  PLAID_TRANSACTION_ERROR
} from 'js/actions';


const initialState = {
  institutions: [],
  accounts: [],
  transactions:[]
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
    console.log(action)
  },
  PLAID_TOKEN_REQUEST: (state, action) => {
    console.log(action)
  },
  PLAID_TRANSACTION_RESPONSE:(state, action) => {
    state.accounts = action.data.accounts;
    state.transactions = action.data.transactions;
  },
  PLAID_TRANSACTION_REQUEST: (state, action) => {

  },
  PLAID_TRANSACTION_ERROR: (state, action) => {

  }
});

module.exports = plaid;
