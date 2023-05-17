import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../constants/todosConstants";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        todos: action.payload,
      };
    }
    case GET_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default todosReducer;
