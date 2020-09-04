import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../types';

const initialState = {
  isLogged: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        isLogged: true,
      };
    case LOGIN_FAILURE:
      console.log('log in fail');
      return state;

    case SIGN_UP_SUCCESS:
      console.log('registered');
      return {
        ...state,
        isLogged: true,
      };
    case 'TEST':
      console.log('testing');
      console.log(state);
      return state;
    case SIGN_UP_FAILURE:
      console.log(payload);
      return state;

    case LOGOUT_SUCCESS:
      console.log('logout success');
      return {
        ...state,
        isLogged: false,
      };

    case LOGOUT_FAILURE:
      console.log('logout fail', payload);
      return state;

    default:
      return state;
  }
};
