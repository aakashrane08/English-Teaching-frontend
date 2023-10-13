import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Menu from "../components/common/Menu";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const menu = useSelector((state) => state.menu);

  return (
    <div>
      <Navbar />
      <div className=" relative">
      <div className="">{menu ? <Menu /> : null}</div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
