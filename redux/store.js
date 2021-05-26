'use-strict'

import { combineReducers, createStore } from 'redux';

import CustomerDataReducer from './customer/reducer';

const AppReducers = combineReducers({
  CustomerDataReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);


export default store;
