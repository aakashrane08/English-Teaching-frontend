import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

export default function Menu() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [confirmationModal, setConfirmationModal] = useState(null)
  
  return (
    <div className=" w-1/6 z-10 h-full absolute border rounded-lg shadow-lg">
      <div className=" bg-pink-200 h-1/5"></div>
      <div className=" bg-slate-100 flex flex-col px-8 py-5 gap-4">
        <div className="cursor-pointer">My Courses</div>
        <div className="cursor-pointer">Masterclass</div>
        <div className="cursor-pointer">My Request</div>
        <div className="cursor-pointer">Help & Support</div>
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
