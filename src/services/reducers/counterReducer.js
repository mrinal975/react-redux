import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET,
} from "../constants/counterConstant";

const initialCounter = {
  count: 0,
};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case RESET: {
      return {
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
