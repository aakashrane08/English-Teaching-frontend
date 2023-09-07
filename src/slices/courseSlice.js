
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  events: [],
  // courseId: null,
  courseId: localStorage.getItem("courseId") ? JSON.parse(localStorage.getItem("courseId")) : null,
  eventDetail: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setEventDetail: (state, action) => {
      state.eventDetail = action.payload;
    },
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
  },
});

export const { setLoading, setEvents, setEventDetail, setCourseId } = courseSlice.actions;

export default courseSlice.reducer;
