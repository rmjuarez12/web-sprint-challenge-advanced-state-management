// Import Dependencies
import React, { useEffect } from "react";
import { gsap } from "gsap";

function Smurf(props) {
  // Add some entrance animation
  useEffect(() => {
    gsap.from(`#smurf-${props.smurf.id}`, { opacity: 0, y: 100, duration: 1 });
  }, [props.smurf.id]);

  // Function to remove smurf
  const removeSmurf = () => {
    props.deleteSmurf(props.smurf.id);
  };

  return (
    <li id={`smurf-${props.smurf.id}`}>
      {props.smurf.name} {props.smurf.id}
      <button onClick={removeSmurf}>Delete</button>
    </li>
  );
}

export default Smurf;
