import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

function ClearCount(props) {
  const [counter, setCounter] = useState(0);

  const onClearButtonClicked = () => {
    props.onClear();
  };

  return (
    <div className="clear-count">
      <button  className="button" onClick={() => onClearButtonClicked()}>X</button>
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
    onClear: () => dispatch({ type: "CLEAR" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCount);
