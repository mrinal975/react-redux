import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer);

export default store;
