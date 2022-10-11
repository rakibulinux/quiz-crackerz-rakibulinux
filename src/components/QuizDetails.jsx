import React from "react";

const QuizDetails = ({ quiz }) => {
  const { correctAnswer, id, options, question } = quiz;
  console.log(correctAnswer, id, options, question);
  return (
    <div className="border-sky-300">
      <h1 className="text-xl font-semibold text-sky-500 py-4">
        Quiz {1}: {question}
      </h1>
      <div className="flex justify-center flex-col p-3  gap-2">
        {options.map((option) => (
          <div className="flex justify-start border border-sky-300 hover:bg-sky-100 gap-y- pl-2">
            <input type="radio" name="" id="" />
            <p className="m-2" option={option}>
              {option}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
