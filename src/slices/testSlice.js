import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    allTests: [],
    testId: localStorage.getItem("testId") ? JSON.parse(localStorage.getItem("testId")) : null,
    testQuestions: [],
  };
  
  const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setAllTests: (state, action) => {
        state.allTests = action.payload;
      },
      setTestQuestions: (state, action) => {
        state.testQuestions = action.payload;
      },
      setTestId: (state, action) => {
        state.testId = action.payload;
      },
    },
  });
  
  export const { setLoading, setAllTests, setTestQuestions, setTestId } = testSlice.actions;
  
  export default testSlice.reducer;
  