import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const topicsData = useContext(TopicsContext);
  const topics = topicsData.data;
  console.log(topics);
  return (
    <section>
      <div className="bg-gray-300">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Choose your favorite Language
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Best quiz platform we will ask you quiz questions for Programming
            Language.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            {topics.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
      {/* <img
        src={heroImg}
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      /> */}
    </section>
  );
};

export default Topics;
