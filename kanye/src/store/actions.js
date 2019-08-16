import axios from "axios";

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export const getAnime = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  axios
    .get(
      "https://ghibliapi.herokuapp.com/films/"
    )
    .then(res => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response));
};