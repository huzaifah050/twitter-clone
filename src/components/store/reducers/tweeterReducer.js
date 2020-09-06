import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  IMAGE_UPLOADED,
  WHICH_ROUTE,
  HOME_ROUTE,
} from '../types';

const initialState = {
  url: null,
  atHome: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, ...payload };

    case ADD_TODO_FAILURE:
      console.log(payload);
      return state;
    case IMAGE_UPLOADED:
      console.log('image uploaded');
      console.log(payload);
      return { ...state, url: payload };

    case WHICH_ROUTE:
      // console.log('route testing');
      return { ...state, atHome: false };
    case HOME_ROUTE:
      // console.log('route testing');
      return { ...state, atHome: true };
    default:
      return state;
  }
};
