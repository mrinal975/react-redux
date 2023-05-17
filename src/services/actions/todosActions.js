import axios from "axios";
import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILED,
} from "../constants/todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODO_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_TODO_FAILED, payload: err.message });
  }
};
