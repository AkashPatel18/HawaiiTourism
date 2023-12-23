import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './action';

const apiActionCreator = (url, type) => (dispatch) => {
  dispatch(fetchData(type.API_PENDING));
  return new Promise(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchSuccess(type.API_SUCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchError(type.API_ERROR, error));
        console.log(error);
      });
  });
};

export default apiActionCreator;