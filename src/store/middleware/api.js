import axios from "axios";
import * as actions from "../api";

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  next(action);
  const { url, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "https://api.0x.org/sra/v3",
      url,
    });
    // General
    dispatch(actions.apiCallSuccess(response.data));
    // Specefic

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error));
    // Specific
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default apiMiddleware;
