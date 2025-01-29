import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5001/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data }); // Serverden alınan melumatı REGISTER action-u ile gönderir

    window.location = "/"; // Qeydiyyat bitdikden sonra ana sehifeye yönlendirir
  } catch (error) {
    toast(error.response?.data?.message || "Xəta baş verdi", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5001/login", authData);
    dispatch({ type: "LOGIN", payload: data });

    window.location = "/";
  } catch (error) {
    toast(error.response?.data?.message || "Xəta baş verdi", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
