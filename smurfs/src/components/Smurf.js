// Import Dependencies
import React from "react";
import axios from "axios";
import { connect } from "react-redux";

// Import Actions
import { loadSmurfs } from "../store/actions";

function Smurf(props) {
  // Function to remove smurf
  const removeSmurf = () => {
    // Delete smurf
    const apiURL = `http://localhost:3333/smurfs/${props.smurf.id}`;

    axios
      .delete(apiURL)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    props.loadSmurfs();
  };

  return (
    <li className='animate__animated animate__bounce'>
      {props.smurf.name} {props.smurf.id}
      <button onClick={removeSmurf}>Delete</button>
    </li>
  );
}

export default connect("", { loadSmurfs })(Smurf);
