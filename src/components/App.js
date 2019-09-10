import React from "react";
import "../App.css";
import DecrementCount from "./DecrementCount";
import IncrementCount from "./IncrementCount";
import DecrementCountMore from "./DecrementCountMore";
import IncrementCountMore from "./IncrementCountMore";
import Clear from "./Clear";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="main-body">
    <div className="neon"><span className="text" data-text="Counter">Counter</span><span className="gradient"></span><span className="spotlight"></span></div>
      <div className="counter">{props.counter}</div>
      <div className="buttons">
        <DecrementCount className="button" />
        <IncrementCount className="button" />
        <DecrementCountMore className="button" />
        <IncrementCountMore className="button" />
        <Clear />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(App);
