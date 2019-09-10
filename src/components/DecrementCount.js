import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

function DecrementCount(props) {
  const [counter, setCounter] = useState(0);

  const onDecrementButtonClicked = () => {
    props.onDecrement();
  };

  return (
    <div className="dec-count">
      <button  className="button" onClick={() => onDecrementButtonClicked()}>-</button>
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
    onDecrement: () => dispatch({ type: "DEC_COUNTER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecrementCount);
