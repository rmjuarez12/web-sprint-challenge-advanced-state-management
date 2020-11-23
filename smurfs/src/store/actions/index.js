// Import Dependencies
import axios from "axios";

// Declare the action variables to export
export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadSmurfs = (smurf) => (dispatch) => {
  // Make sure to setup a loading state first while data loads
  dispatch({
    type: IS_LOADING,
  });

  // Set the URL for the API endpoint to get the data
  const apiURL = "http://localhost:3333/smurfs";

  // Get the data
  axios.get(apiURL).then((response) => {
    console.log(response);

    dispatch({
      type: DATA_LOAD_SUCCESS,
      payload: response.data,
    });
  });
};
