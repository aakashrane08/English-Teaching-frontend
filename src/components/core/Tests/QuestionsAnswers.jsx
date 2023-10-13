import React, { useEffect } from "react";
import { apiConnector } from "../../../services/apiconnector";
import { testEndPoints } from "../../../services/apis";
import { useDispatch, useSelector } from "react-redux";
import { setTestQuestions } from "../../../slices/testSlice";
import QACard from "./QACard";

export default function QuestionsAnswer() {
  const { GET_ALL_QUESTIONS_API } = testEndPoints;
  const testId = useSelector((state) => state.test.testId);
  const testQuestions = useSelector((state) => state.test.testQuestions)
  const dispatch = useDispatch()

  const getQuestions = async () => {
    try {
      const response = await apiConnector(
        "GET",
        `${GET_ALL_QUESTIONS_API}/${testId}`
      );
      const questions = response?.data;
      dispatch(setTestQuestions(questions))
      console.log("Qu");
      console.log(questions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestions();
  },[]);

  return <div>
    {
      testQuestions.map((question) => (
        <QACard key={question.id} question={question}/>
      ))
    }
  </div>;
}
