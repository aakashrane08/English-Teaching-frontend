import React from "react";
import logo from "../assets/logo/fluent_life.png";
import LoginForm from "../components/auth/LoginForm";
import loginImg1 from "../assets/images/login_1.png";
import loginImg2 from "../assets/images/login_2.png";
import loginImg3 from "../assets/images/login_3.png";

export default function Login() {
  return (
    <div className=" pb-10">
      <div className=" w-[60%] h-[100%] bg-slate-100 -z-10 fixed top-0 left-0" />
      <header>
        <div className="align-middle flex py-12 mx-72">
          <img src={logo} alt="logo"></img>
        </div>
      </header>

      <div className=" mx-[250px] ">
        <div className=" flex md:flex-row gap-3 flex-col items-center">
          <div className=" w-1/2">
            <div className="flex flex-col items-center flex-wrap">
              <div className="flex scroll-smooth transition-all overflow-x-hidden snap-x snap-mandatory image-slider">
                {/* <img
                  className=" w-fit snap-center image-wrapper"
                  src={loginImg1}
                /> */}
                <img
                  className=" w-fit snap-center image-wrapper"
                  src={loginImg2}
                />
                {/* <img
                  className=" w-fit snap-center image-wrapper"
                  src={loginImg3}
                /> */}
              </div>
              <div className=" w-full text-center font-semibold text-2xl mt-6 ">
                Give Free English Fluency Test To know Where You Stand
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
