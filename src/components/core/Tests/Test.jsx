import React, { useEffect } from "react";
import { testEndPoints } from "../../../services/apis";
import { apiConnector } from "../../../services/apiconnector";
import { useDispatch, useSelector } from "react-redux";
import { setAllTests } from "../../../slices/testSlice";
import Spinner from "../../common/Spinner";
import TestCard from "./TestCard";

export default function Test() {
  const { GET_ALL_TEST_API } = testEndPoints;
  const dispatch = useDispatch();
  const allTests = useSelector((state) => state.test.allTests);
  const loading = useSelector((state) => state.test.loading);

  const getAllTest = async () => {
    try {
      const response = await apiConnector("GET", GET_ALL_TEST_API);
      const test = response?.data;
      dispatch(setAllTests(test));
      console.log("TESTS....");
      console.log(test);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTest();
  }, []);

  return (
    <div className='flex items-center'>
      <div className='flex flex-wrap'>
        {loading ? (
          <Spinner />
        ) : allTests.length > 0 ? (
          <div className="flex flex-col gap-5 py-20 ">
            {allTests.map((test) => (
              <TestCard key={test.id} test={test}/>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p>No Test Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
