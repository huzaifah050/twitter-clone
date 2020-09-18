import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  VERIFY_START,
  CLEAN,
  RECOVER_SUCCESS,
  RECOVER_START,
  RECOVER_FAILURE,
  HANDLE_ERROR,
  LOGIN_START,
  SIGN_UP_START,
  LOGOUT_START,
} from '../types';

const initialState = {
  login: {
    error: null,
    loading: false,
  },
  logout: {
    error: null,
    loading: false,
  },
  verifyEmail: {
    error: null,
    loading: false,
  },
  recoverPassword: {
    error: null,
    loading: false,
  },
  register: {
    handleError: false,
  },
  signUp: {
    error: null,
    loading: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAN: {
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: null },
        login: { ...state.login, loading: false, error: null },
        logout: { ...state.logout, loading: false, error: null },
        register: { ...state.register, handleError: false },
        signUp: {
          ...state.signUp,
          loading: false,
          error: null,
        },
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: null,
        },
      };
    }
    case LOGIN_START:
      return {
        ...state,
        login: { ...state.login, loading: true },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...state.login, loading: false, error: null },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: { ...state.login, loading: false, error: payload },
      };
    case SIGN_UP_START:
      return {
        ...state,
        signUp: { ...state.signUp, loading: true },
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUp: { ...state.signUp, loading: false, error: null },
      };
    case 'TEST':
      console.log('testing');
      console.log(state);
      return state;
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUp: { ...state.signUp, loading: false, error: payload },
      };

    case LOGOUT_START:
      return {
        ...state,
        logout: { ...state.logout, loading: true },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logout: { ...state.logout, loading: false, error: null },
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logout: { ...state.logout, loading: false, error: payload },
      };

    case VERIFY_START:
      return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: false },
      };
    case VERIFY_FAILURE:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: payload },
      };

    case RECOVER_START:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: true,
        },
      };
    case RECOVER_SUCCESS:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: false,
        },
      };
    case RECOVER_FAILURE:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: payload,
        },
      };

    case HANDLE_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          handleError: true,
        },
      };
    default:
      return state;
  }
};
