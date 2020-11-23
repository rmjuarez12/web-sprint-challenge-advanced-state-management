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
  axios
    .get(apiURL)
    .then((response) => {
      // If there are no errors, run the action to load the supplied data
      dispatch({
        type: DATA_LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      // If we get an error, add it to the errors state
      console.log(error);

      dispatch({
        type: DATA_LOAD_ERROR,
        payload: error,
      });
    });
};

// Function to add smurf
export const addSmurf = (smurf) => (dispatch) => {
  // Set the URL for the API endpoint to post the data
  const apiURL = "http://localhost:3333/smurfs";

  // Post the data
  axios
    .post(apiURL, smurf)
    .then((response) => {
      dispatch({
        type: DATA_LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      const errorMessage = error.response.data.Error;
      dispatch({
        type: DATA_LOAD_ERROR,
        payload: errorMessage,
      });
    });
};

// Function to delete smurf
export const deleteSmurf = (smurfId) => (dispatch) => {
  // Set the URL for the API endpoint to post the data
  const apiURL = `http://localhost:3333/smurfs/${smurfId}`;

  // Post the data
  axios
    .delete(apiURL)
    .then((response) => {
      dispatch({
        type: DATA_LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      alert(error);
    });
};
