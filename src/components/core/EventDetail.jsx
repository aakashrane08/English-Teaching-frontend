import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseEndpoints } from "../../services/apis";
import { apiConnector } from "../../services/apiconnector";
import { toast } from "react-hot-toast";
import { setEventDetail } from "../../slices/courseSlice";
import eventImg from "../../assets/images/eventDetail.jpg";

export default function EventDetail() {
  const { eventDetail, courseId } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const { EVENTS_DETAILS_API } = courseEndpoints;

  const getCourseDetail = async () => {
    try {
      const response = await apiConnector(
        "GET",
        `${EVENTS_DETAILS_API}/${courseId}`
      );
      const detail = response?.data;
      console.log(detail);
      dispatch(setEventDetail(detail));
    } catch (error) {
      console.log("GET_ALL_COURSE_API API ERROR............", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCourseDetail();
  }, []);

  return (
    <div className="flex justify-center items-center py-24">
      <div className=" border border-blue-600 gap-20 w-1/2 flex md:flex-row flex-col ">
        <div className=" w-1/2">
          <img src={eventImg} alt="" className="" />
        </div>
        <div className="flex flex-col gap-3 text-left py-2">
        <h1>{eventDetail.name}</h1>
        <h1>{eventDetail.description}</h1>
        <h1>{eventDetail.event_date}</h1>
        <h1>{eventDetail.event_time}</h1>
        <a href={eventDetail.link} target="_blank"
        className=" border px-4 py-2 text-center bg-yellow-300 rounded">Meet Room</a>
        </div>
      </div>
    </div>
  );
}
