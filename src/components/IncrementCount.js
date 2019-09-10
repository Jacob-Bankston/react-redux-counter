import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

function IncrementCount(props) {
  const [counter, setCounter] = useState(0);

  const onIncrementButtonClicked = () => {
    props.onIncrement();
  };

  return (
    <div className="inc-count">
      <button  className="button" onClick={() => onIncrementButtonClicked()}>+</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INC_COUNTER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncrementCount);
