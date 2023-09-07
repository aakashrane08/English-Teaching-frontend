import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import { MenuLinks } from "../../data/menu-links";
import { RxCross1 } from 'react-icons/rx'
import { toggle } from "../../slices/menuSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const [confirmationModal, setConfirmationModal] = useState(null);
  const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${user.first_name}`;

  return (
    <div className=" w-1/6 z-10 h-full absolute border rounded-lg shadow-lg">
      <div className=" bg-pink-200 p-5 relative">
        <RxCross1 className=" absolute right-5 top-3 text-2xl cursor-pointer" onClick={() => dispatch(toggle())}/>
        <Link
          to={"/dashboard/profile"}
          className=" flex flex-col gap-2 justify-center items-center"
        >
          <img src={userImage} alt="" width={100} className=" rounded-full" />
          <h1>{user.first_name}</h1>
        </Link>
      </div>
      <div className=" bg-slate-100 h-full flex flex-col px-8 py-5 gap-4">
        <ul className="flex flex-col w-full gap-3  px-[12px] cursor-pointer">
          {MenuLinks.map((link, index) => (
            <li key={index}>
              <Link to={link?.path}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="cursor-pointer">Masterclass</div>
        <div className="cursor-pointer">My Courses</div>
        <div className="cursor-pointer">My Request</div>
        <div className="cursor-pointer">Help & Support</div> */}
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
