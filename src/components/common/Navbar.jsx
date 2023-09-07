import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import referral from "../../assets/svg/speaker-megaphone-svgrepo-com.svg";
import wallet from "../../assets/svg/wallet-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { toggle } from "../../slices/menuSlice";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function Navbar() {

  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggle());
  };

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div className=" min-w-full z-10 bg-blue-600 h-20">
      <div className="flex items-center justify-between h-20 mx-60 text-white">
        <div className=" cursor-pointer text-4xl">
          <CgDetailsMore 
          onClick={menuHandler}
          />
        </div>
        <div>
          <ul className="flex gap-8 text-lg">
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? " text-white font-semibold hidden md:block"
                          : "text-white hidden md:block"
                      } hover:`}
                    >
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))
            }
            {/* <li className="cursor-pointer">Masterclass</li>
            <li className="cursor-pointer">My Courses</li>
            <li className="cursor-pointer">Change Request</li> */}
          </ul>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <div className="flex gap-2">
            <img src={referral} width={30} alt="" />
            <p>My Referrals</p>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <img src={wallet} width={30} alt="" />
            <p>My Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
