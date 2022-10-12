import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;

  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 bg-cyan-200 hover:bg-gray-500"
        src={logo}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        Topic: {name}
      </p>
      <p className="text-gray-700 font-bold">Total Quiz: {total}</p>
      <Link
        className="flex gap-2 justify-center items-centerpx-8 w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400"
        to={`../quiz/${id}`}
      >
        <button type="button">Start Quiz</button>
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
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Topic;
