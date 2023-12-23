import { InitialState } from '@react-navigation/native';
import {HIGHLIGHT_ACTION_TYPES, CATEGORIES_ACTION_TYPES}  from './type';

initialState={
  loading: false,
  highlightData : undefined,
  error : ''
}

const apiReducer = (state = initialState, action) => {
  console.log({state,action})
  switch (action.type) {
    case HIGHLIGHT_ACTION_TYPES.API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case HIGHLIGHT_ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case HIGHLIGHT_ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default apiReducer;