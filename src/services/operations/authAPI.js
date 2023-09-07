import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { toggle } from "../../slices/menuSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"

const {
  LOGIN_API,
} = endpoints

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser(response.data.account))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("account", JSON.stringify(response.data.account))
      navigate("/dashboard/masterclass")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(toggle())
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("account")
    localStorage.removeItem("courseId")
    toast.success("Logged Out")
    navigate("/login")
  }
}