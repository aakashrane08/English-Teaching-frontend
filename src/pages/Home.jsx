import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Menu from "../components/common/Menu";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import Masterclass from "../components/core/Masterclass";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const menu = useSelector((state) => state.menu);

  return (
    <div>
      <Navbar />
      <div>
        {menu ? <Menu/> : null}
        <div className="">
          {/* <Masterclass/> */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
