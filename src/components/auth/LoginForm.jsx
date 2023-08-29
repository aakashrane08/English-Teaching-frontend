import React from "react";
import { useState } from "react";
import facebook from "../../assets/svg/facebook-svgrepo-com.svg";
import google from "../../assets/svg/google-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../services/operations/authAPI";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  }
  return (
    <div className=" px-4 mx-4">
      <form
        onSubmit={handleOnSubmit}
        className=" border rounded-md px-8 bg-white flex flex-col gap-7 py-4 shadow-md"
      >
        <div>
          <p className=" font-normal text-blue-950 mt-1">THE FLUENTLIFE</p>
          <h3 className=" font-semibold text-blue-950 text-3xl ">
            LET'S START LEARNING
          </h3>
          <p className=" font-extralight">Learn from India's best teachers</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border rounded-md py-3 flex justify-center items-center gap-3">
            <img src={google} width={35} alt="" />
            <p className=" text-base">Continue with Google</p>
          </div>
          <div className="border rounded-md py-3 flex justify-center items-center gap-3">
            <img src={facebook} width={35} alt="" />
            <p className=" text-base ">Continue with Facebook</p>
          </div>
        </div>

        <div className=" flex justify-center items-center w-full gap-2 mx-4">
          <hr className=" w-full border" />
          <span className=" whitespace-nowrap opacity-60">OR USE</span>
          <hr className=" w-full border" />
        </div>

        <div className=" flex flex-col gap-2">
          <label className="w-full">
            <p className="mb-1 leading-[1.375rem]">
              Email Address <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full border rounded-[0.5rem] p-[12px]"
            />
          </label>
          <label className="relative">
            <p className="mb-1 leading-[1.375rem]">
              Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full border rounded-[0.5rem] p-[12px] pr-12"
            />
            {/* <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              ></span> */}
            <>
              <p className="mt-3 text-xs text-blue-500 cursor-pointer">
                Forgot Password ?
              </p>
            </>
          </label>
        </div>
        <button
          type="submit"
          className=" rounded bg-blue-500 px-4 py-2 font-medium text-white"
        >
          Sign In
        </button>
        <Link to="/contact">
          <p className=" text-center">
            New User ? <span className=" text-blue-600">Contact Us</span>{" "}
          </p>
        </Link>
      </form>
    </div>
  );
}
