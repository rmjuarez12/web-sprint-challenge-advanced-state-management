// Import Dependencies
import React, { useState } from "react";

function SmurfForm(props) {
  // Set initial state for form info
  const initialState = {
    name: "",
    age: "",
    height: "",
  };

  // This is the state that will save the state info of the form
  const [smurfInfo, setSmurfInfo] = useState(initialState);

  // Function that handles the form change
  const handleFieldChange = (e) => {
    setSmurfInfo({
      ...smurfInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Function that handles submit
  const handleFormSubmission = (e) => {
    e.preventDefault();

    props.addSmurf(smurfInfo);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleFieldChange}
          value={smurfInfo.name}
          placeholder='Name'
        />

        <input
          type='number'
          name='age'
          id='age'
          onChange={handleFieldChange}
          value={smurfInfo.age}
          placeholder='Age'
        />

        <input
          type='number'
          name='height'
          id='height'
          onChange={handleFieldChange}
          value={smurfInfo.height}
          placeholder='Height(in cm)'
        />

        <button>Add Smurf</button>
      </form>
    </div>
  );
}

export default SmurfForm;
