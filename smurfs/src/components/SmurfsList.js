// Import Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Import Actions
import { loadSmurfs } from "../store/actions";

// Import Components
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

function SmurfsList(props) {
  return (
    <div>
      <h3>Smurfs List</h3>

      <SmurfForm />

      <ul>
        {props.smurfs.length
          ? props.smurfs.map((smurf) => {
              return <Smurf smurf={smurf} key={smurf.id} />;
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
  };
};

export default connect(mapStateToProps, { loadSmurfs })(SmurfsList);
