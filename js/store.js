import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";

import reducers from 'js/reducers'

export default createStore(reducers, applyMiddleware(thunk));
