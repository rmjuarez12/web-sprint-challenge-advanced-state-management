// Import Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// Import Assets
import "./App.css";

// Import Components
import SmurfsList from "./SmurfsList";

// Import Actions
import { loadSmurfs } from "../store/actions";

class App extends Component {
  componentDidMount = () => {
    this.props.loadSmurfs();
  };

  render() {
    return (
      <div className='App'>
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <SmurfsList />
      </div>
    );
  }
}

export default connect("", { loadSmurfs })(App);
