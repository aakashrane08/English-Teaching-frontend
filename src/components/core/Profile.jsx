import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.profile);
  const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${user.first_name}`;

  return (
    <div className=" flex justify-center items-center py-16 ">
      <div className="flex flex-col gap-9 w-1/3 border p-5 rounded-md">
        <div className=" self-center ">
        <img src={userImage} alt="" width={200} className="rounded-2xl" />
        </div>
        <label className="">
          <p>Name</p>
          <input
            type="text"
            id="name"
            placeholder={user.first_name}
            className="w-full border border-black rounded p-[12px]"
          />
        </label>
        <label className="">
          <p>Email</p>
          <input
            type="text"
            id="email"
            placeholder={user.email}
            className="w-full border border-black rounded p-[12px]"
          />
        </label>
        <label className="">
          <p>Phone Number</p>
          <input
            type="text"
            id="number"
            placeholder={user.phone_number}
            className="w-full border border-black rounded p-[12px]"
          />
        </label>
      </div>
    </div>
  );
}
