import * as t from "./actionTypes";

const handlers = {
  [t.SET_UI]: (state, action) => ({
    ...state,
    uiName: action.payload
  }),
  DEFAULT: state => state
};

export const uiReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
