import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET,
} from "../constants/counterConstant";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};
export const decementCouner = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
