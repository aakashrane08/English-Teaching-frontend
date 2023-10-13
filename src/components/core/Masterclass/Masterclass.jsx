import React, { useEffect } from 'react';
import { courseEndpoints } from '../../../services/apis';
import Spinner from '../../common/Spinner';
import Events from './Events';
import { useDispatch, useSelector } from 'react-redux';
import { apiConnector } from '../../../services/apiconnector';
import toast from 'react-hot-toast';
import { setEvents } from '../../../slices/courseSlice';


export default function Masterclass() {

  const { GET_ALL_EVENTS_API } = courseEndpoints;
  const loading = useSelector((state) => state.course.loading);
  const events = useSelector((state) => state.course.events);
  const dispatch = useDispatch();

  const getAllCourses = async () => {
    try {
      const response = await apiConnector("GET", GET_ALL_EVENTS_API)
      const events = response?.data
      dispatch(setEvents(events));
      console.log("EVENTS...")
      console.log(events)
    } catch (error) {
      console.log("GET_ALL_COURSE_API API ERROR............", error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getAllCourses()
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-wrap'>
        {loading ? (
          <Spinner />
        ) : events.length > 0 ? (
          <div className="flex flex-wrap gap-16 py-20 px-40 justify-center items-center">
            {events.map((events) => (
              <Events key={events.id} events={events} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p>No data Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
