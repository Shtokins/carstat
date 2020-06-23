import * as t from "./actionTypes";

const handlers = {
  [t.GET_CARS_DATA]: (state, action) => ({
    ...state,
    cars: action.payload,
    loading: false
  }),
  [t.SET_LOADING]: state => ({ ...state, loading: true }),
  DAFAULT: state => state
};

export const carsApiReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DAFAULT;
  return handler(state, action);
};
