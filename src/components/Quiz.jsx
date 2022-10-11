import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const quizData = useLoaderData();
  const quizzes = quizData.data.questions;
  console.log(quizData.data.name);
  return (
    <div>
      <h1 className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-center">
        Quiz of {quizData.data.name}
      </h1>
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-96 lg:pb-20 lg:pt-10 flex items-center justify-center">
        <div className="grid gap-8 row-gap-5 mb-8 grid-cols-1 items-center justify-center">
          {quizzes.map((quiz) => (
            <QuizDetails key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
