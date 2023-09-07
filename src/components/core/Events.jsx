import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import tempImg from "../../assets/images/temp1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCourseId } from "../../slices/courseSlice";
import { useNavigate } from "react-router-dom";

export default function Events(props) {
  const events = props.events;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const courseId = useSelector((state) => state.course.courseId);

  function getDetail() {
    dispatch(setCourseId(events.id));
    localStorage.setItem("courseId", JSON.stringify(events.id))
    navigate("/dashboard/masterclass/detail");
  }

  return (
    <div className="flex flex-col gap-1 border bg-slate-50 rounded-md shadow-md hover:shadow-black transition-all w-56">
      <div>
        <img
          src={tempImg}
          alt=""
          className=" cursor-pointer "
          onClick={getDetail}
        />
      </div>
      <div className=" px-5 py-5 flex flex-col gap-2">
        <div className=" opacity-90">{events.name}</div>
        <div>{events.description}</div>
        <div className="flex flex-col">
          <p>Date :- {events.event_date}</p>
          {/* {events.event_time} */}
        </div>
        <a
          href={events.link}
          target="_blank"
          className=" flex items-center justify-center gap-1 px-4 py-1 bg-blue-600 text-white border rounded hover:-translate-y-1"
        >
          <span className=" pr-1">Go to Class </span>
          <BsBoxArrowUpRight />
        </a>
      </div>
    </div>
  );
}
