import { ADD_TODO, ADD_TODO_FAILURE, IMAGE_UPLOADED } from '../types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, ...payload };

    case ADD_TODO_FAILURE:
      console.log(payload);
      return state;
    case IMAGE_UPLOADED:
      console.log('image uploaded');
      return state;
    default:
      return state;
  }
};
