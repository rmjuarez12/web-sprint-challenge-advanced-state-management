// Import Dependencies
import React from "react";
import { connect } from "react-redux";

// Import Actions
import { loadSmurfs, deleteSmurf, addSmurf } from "../store/actions";

// Import Components
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

function SmurfsList(props) {
  console.log(props.errors);

  return (
    <div>
      <h3>Smurfs List</h3>

      <SmurfForm addSmurf={props.addSmurf} />

      {props.errors}

      <ul>
        {props.smurfs.length
          ? props.smurfs.map((smurf) => {
              return (
                <Smurf
                  smurf={smurf}
                  key={smurf.id}
                  deleteSmurf={props.deleteSmurf}
                />
              );
            })
          : "No Smurfs Found. Add one?"}
      </ul>
    </div>
  );
}

// Function to insert Redux state to props
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { loadSmurfs, deleteSmurf, addSmurf })(
  SmurfsList
);
