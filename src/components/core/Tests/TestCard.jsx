import React from "react";
import testImg from "../../../assets/images/test-time.webp";
import { useDispatch } from "react-redux";
import { setTestId } from "../../../slices/testSlice";
import { useNavigate } from "react-router-dom";

export default function TestCard(props) {
  const test = props.test;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function getQuestions() {
    dispatch(setTestId(test.id))
    localStorage.setItem("testId", JSON.stringify(test.id))
    navigate('/dashboard/QA/test')
  }


  return (
    <div >
      <div onClick={getQuestions}>
        {test.title}
      </div>
    </div>
  );
}
