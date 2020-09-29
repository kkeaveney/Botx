import { combineReducers } from "redux";
import web3 from "../actions/web3Slice";
import token from "../actions/tokenSlice";
import api from "../actions/apiSlice";

export default combineReducers({
  api,
  web3,
  token,
});
