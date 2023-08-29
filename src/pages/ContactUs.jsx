import React from 'react'
import logo from "../assets/logo/fluent_life.png";
import contactImg from '../assets/images/signup.png'
import SignupForm from '../components/auth/ContactForm';

export default function ContactUs() {
  return (
    <div className=" pb-10">
      <div className=" w-[60%] h-[100%] bg-slate-100 -z-10 fixed top-0 left-0" />
      <header>
        <div className="align-middle flex py-12 mx-72">
          <img src={logo} alt="logo"></img>
        </div>
      </header>

      <div className=" mx-[250px] ">
        <div className=" flex md:flex-row gap-3 flex-col justify-center items-center">
          <div className=" w-1/2">
              <div className="">
                <img
                  className=" w-fit"
                  src={contactImg}
                />
              </div>
          </div>
          <div className=" w-1/2">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
