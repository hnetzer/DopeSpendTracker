'use strict';

import {combineReducers} from 'redux';

module.exports = combineReducers({
  plaid: require('./plaid'),
});
