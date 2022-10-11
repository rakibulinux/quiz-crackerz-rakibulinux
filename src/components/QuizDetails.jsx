import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizDetails = ({ quiz, index }) => {
  // console.log(index);
  const { correctAnswer, id, options, question } = quiz;
  const [answer, setAnswer] = useState([]);
  const [indexs, setIndexs] = useState([]);
  const [isActive, setIsActive] = useState(false);
  // let number = 1;
  const checkQuiz = (option) => {
    if (option === correctAnswer) {
      //disable the radio button
      toast.success("Right Answer", { autoClose: 500 });
    } else {
      //enable the radio button
      toast.error("Wrong Answer", { autoClose: 500 });
    }
  };
  const displayCorrectAnswer = (correctAnswer) => {
    const quizAnswer = correctAnswer;
    setAnswer(quizAnswer);
    setIsActive((current) => !current);
  };
  return (
    <div className="border shadow-2xl border-cyan-300">
      <div className="flex items-center justify-between">
        <h1 className="text-center text-xl font-semibold text-cyan-500 p-4">
          Quiz {indexs}: {question}
        </h1>
        <div>
          <button
            onClick={() => displayCorrectAnswer(correctAnswer)}
            className="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p
        style={{
          padding: isActive ? "20px" : "",
          color: isActive ? "rgb(8 145 178)" : "",
          display: isActive ? "block" : "none",
          fontSize: isActive ? "20px" : "",
        }}
      >
        Right Answer for this question:
        <span className="font-bold text-cyan-900"> {answer}</span>
      </p>
      <div className="flex justify-center flex-col p-3  gap-2">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="flex justify-start border border-cyan-300 hover:bg-cyan-100 gap-y- pl-2"
          >
            <input
              onClick={() => checkQuiz(option)}
              type="radio"
              name="options"
              id="options"
              value={option}
              className="ml-5 dark:bg-gray-800"
            />
            <label name="options" htmlFor="options" className="m-2">
              {option}
            </label>
            {/* <p option={option}>
              
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
