import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";

function IncrementCountMore(props) {
  const [counter, setCounter] = useState(0);

  const onIncrementMoreButtonClicked = () => {
    props.onIncrementMore();
  };

  return (
    <div className="inc-count-more">
      <button  className="button" onClick={() => onIncrementMoreButtonClicked()}>+10</button>
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
    onIncrementMore: () => dispatch({ type: "INC_COUNTER_MORE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncrementCountMore);
