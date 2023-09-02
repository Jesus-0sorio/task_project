import { api } from "../../../config/axios";

import { loginFailed, loginSuccess } from "./authSlice";
import { startLoading, stopLoading } from "../loadingSlice";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(startLoading());
    try {
      const { data } = await api.post("/auth/login", { email, password });
      window.localStorage.setItem("token", data.access_token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(loginSuccess(data));
      window.location.reload();
    } catch (error) {
      dispatch(loginFailed(error.message));
    } finally {
      dispatch(stopLoading());
    }
  };


