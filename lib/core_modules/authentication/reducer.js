'use-strict'

import * as Actions from './actions';

let INIT_STATE = {};

const UserDataReducer = (state = INIT_STATE, action) => {

  if(
    action.type === Actions.UPDATE_USER_DATA &&
    state[action.payload.auth]
  ){

    state[action.payload.auth] = {
      user_data: action.payload.user_data
    };

  }

  if(
    action.type === Actions.FLUSH_USER_DATA &&
    state[action.payload.auth]
  ){

    delete state[action.payload.auth];

  }


  if(
    action.type === Actions.ADD_USER_DATA
  ){

    state[action.payload.auth] = {
      user_data: action.payload.user_data
    };

  }

	return state;
}


export default UserDataReducer;
