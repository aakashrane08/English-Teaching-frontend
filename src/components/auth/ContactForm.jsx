import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector"
import { endpoints } from "../../services/apis"

export default function SignupForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        endpoints.CONTACT_US_API,
        data
      );
      console.log("emailAddress Res - ", res);
      setLoading(false);
      navigate("/login")
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        emailAddress: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <form
        className=" border rounded shadow-md p-6 bg-gray-100 flex flex-col gap-3"
        onSubmit={handleSubmit(submitContactForm)}
      >
        <h2 className=" text-center text-black font-semibold uppercase text-2xl">
          Contact Us
        </h2>
        <label className="w-full">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            className="w-full border rounded-[0.5rem] p-[12px]"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </label>
        <label className="w-full">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            className="w-full border rounded-[0.5rem] p-[12px]"
            {...register("lastName")}
          />
        </label>
        <label className="w-full">
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="Enter email address"
            className="w-full border rounded-[0.5rem] p-[12px]"
            {...register("emailAddress", { required: true })}
          />
          {errors.emailAddress && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your email address.
            </span>
          )}
        </label>
        <label className="w-full">
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="12345 67890"
            className="w-full border rounded-[0.5rem] p-[12px]"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
          {errors.phoneNumber && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {errors.phoneNumber.message}
            </span>
          )}
        </label>
        <button
          type="submit"
          className=" rounded bg-blue-500 px-4 py-2 font-medium text-white"
        >
          Contact Us
        </button>
        <Link to="/login">
          <p className=" text-center">
            Already a Member? <span className=" text-blue-600">Sign In</span>{" "}
          </p>
        </Link>
      </form>
    </div>
  );
}
