import {HIGHLIGHT_ACTION_TYPES, CATEGORIES_ACTION_TYPES} from './type';

export const fetchData = (type) => ({
    type
});
  
export const fetchSuccess = (type,data) => ({
    payload: data,
});
  
export const fetchError = (type, error) => ({
    payload: error,
 });