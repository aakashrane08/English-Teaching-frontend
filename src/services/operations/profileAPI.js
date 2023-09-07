import { toast } from "react-hot-toast";

import { setLoading, setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { profileEndpoints } from "../apis";
import { logout } from "./authAPI";

const { GET_USER_DETAILS_API } = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });
      console.log("GET_USER_DETAILS API RESPONSE............", response);

      dispatch(setUser({ ...response.data }));
    } catch (error) {
      // dispatch(logout(navigate));
      console.log("GET_USER_DETAILS API ERROR............", error);
      toast.error("Could Not Get User Details");
    }
    dispatch(setLoading(false));
  };
}
