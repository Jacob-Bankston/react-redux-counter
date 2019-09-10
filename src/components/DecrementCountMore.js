import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

function DecrementCountMore(props) {
  const [counter, setCounter] = useState(0);

  const onDecrementMoreButtonClicked = () => {
    props.onDecrementMore();
  };

  return (
    <div className="dec-count-more">
      <button  className="button" onClick={() => onDecrementMoreButtonClicked()}>-10</button>
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
    onDecrementMore: () => dispatch({ type: "DEC_COUNTER_MORE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecrementCountMore);
