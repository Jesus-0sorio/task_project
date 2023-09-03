import { api } from "../../../config/axios";

import { loginFailed, loginSuccess } from "./authSlice";
import { startLoading, stopLoading } from "../loadingSlice";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(startLoading());
    try {
      const { data } = await api.post("/user/login", { email, password });
      if (data.success) {
        window.localStorage.setItem("token", data.token);
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginFailed(data.message));
      }
    } catch (error) {
      dispatch(loginFailed(error.message));
    } finally {
      dispatch(stopLoading());
    }
  };


