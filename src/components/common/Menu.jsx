import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import { MenuLinks } from "../../data/menu-links";
import { RxCross1 } from "react-icons/rx";
import { toggle } from "../../slices/menuSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const [confirmationModal, setConfirmationModal] = useState(null);
  const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${user.first_name}`;

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex flex-col absolute w-64 z-10 border  rounded-lg shadow-lg">
      <div className=" bg-pink-200 px-6 py-8 relative">
        <RxCross1
          className=" absolute right-2 top-2 text-xl cursor-pointer"
          onClick={() => dispatch(toggle())}
        />

        <div className=" flex gap-4 justify-center items-center">
          <Link to={"/dashboard/profile"}>
            <img src={userImage} alt="" width={80} className=" rounded-full" />
          </Link>
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" font-semibold">WELCOME</h1>
            <h1>{user.first_name}</h1>
          </div>
        </div>
      </div>
      <div className="  flex flex-col px-8 py-5 gap-4 bg-slate-100">
        <ul className="flex flex-col w-full gap-3  px-[12px] cursor-pointer">
          {MenuLinks.map((link, index) => (
            <li key={index}>
              <Link to={link?.path}>
                <p
                  className={`${
                    matchRoute(link?.path)
                      ? " text-black font-semibold hidden md:block"
                      : "text-black hidden md:block"
                  } hover:`}
                >
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setConfirmationModal({
              text1: "Are you sure?",
              text2: "You will be logged out of your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => dispatch(logout(navigate)),
              btn2Handler: () => setConfirmationModal(null),
            });
          }}
          className="flex w-full items-center gap-x-1 py-[10px] px-[12px] cursor-pointer"
        >
          <VscSignOut className="text-lg" />
          Logout
        </div>
        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
    </div>
  );
}
