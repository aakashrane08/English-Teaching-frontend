import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Menu from "../components/common/Menu";
import { useSelector } from "react-redux";
import Dashboard from "../components/core/Dashboard";

export const Home = () => {
  const menu = useSelector((state) => state.menu);

  // function allEvents()

  // useEffect(() => {
  //   allEvents();
  // }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {menu ? <Menu /> : null}
        <div className="">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};
