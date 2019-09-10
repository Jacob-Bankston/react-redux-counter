const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1
    };
  } else if (action.type === "INC_COUNTER_MORE") {
    return {
      ...state,
      counter: state.counter + 10
    };
  } else if (action.type === "DEC_COUNTER_MORE") {
    return {
      ...state,
      counter: state.counter - 10
    };
  } else if (action.type === "CLEAR") {
    return {
      ...state,
      counter: state.counter - state.counter
    };
  }

  return state;
};

export default reducer;
