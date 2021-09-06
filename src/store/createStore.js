import { createStore } from "redux";
import authReducer from "../reducers/auth";

export default () => {
    return createStore(authReducer);
}